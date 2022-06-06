import copy
from operator import attrgetter
from itertools import filterfalse
from typing import Optional, Literal
from dataclasses import dataclass, asdict

from django.conf import settings
from catalog.models import ProductVariant
from rest_framework.utils.serializer_helpers import ReturnDict
from catalog.serializers import ProductVariantSerializer


@dataclass
class CartItem:
    quantity: int
    size: str
    id: int
    product_variant: Optional[ProductVariant | ReturnDict] = None


class QuantityLessThanZeroException(Exception):
    ...


class ItemAlreadyExistsException(Exception):
    ...


class ItemDoesNotExistsException(Exception):
    ...


class Cart:
    def __init__(self, request):
        self.session = request.session

        if not (cart := self.session.get(settings.CART_SESSION_ID)):
            cart = self.session[settings.CART_SESSION_ID] = []
        self.cart = [CartItem(**item) for item in cart]
        product_variants = ProductVariant.objects.filter(id__in=set([item.id for item in self.cart]))
        for item in self.cart:
            item.product_variant = product_variants.get(id=item.id)

    def _create_item(self, product_variant: ProductVariant, size):
        if not self._variant_exists(product_variant, size):
            return CartItem(id=product_variant.id, size=size, quantity=0, product_variant=product_variant)
        else:
            raise ItemAlreadyExistsException

    def _variant_exists(self, product_variant: ProductVariant, size):
        variants = self._filter_variants(product_variant, size, filter)
        return bool(variants)

    def set_quantity(self, product_variant: ProductVariant, size, action: Optional[Literal['add', 'sub']] = None,
                     quantity=1):
        if product_variant.size_is_valid(size):
            size = str(size)
            try:
                cart_item = self._filter_variants(product_variant, size, filter)[0]
            except IndexError:
                cart_item = self._create_item(product_variant, size)
                self.cart.append(cart_item)
            try:
                self._set_item_quantity(cart_item, action, quantity)
                self.save()
            except QuantityLessThanZeroException:
                self.remove(product_variant, size)

    def _set_item_quantity(self, cart_item: CartItem, action, quantity):
        match action:
            case 'add':
                cart_item.quantity += 1
            case 'sub':
                cart_item.quantity -= 1
            case None:
                cart_item.quantity = quantity
        if cart_item.quantity <= 0:
            raise QuantityLessThanZeroException

    def _get_or_create_item(self, variant_list, product_variant, size):
        return variant_list[0] if variant_list else CartItem(id=product_variant.id, size=size, quantity=0)

    def _filter_variants(self, variant: ProductVariant, size, function_type):
        return list(function_type(lambda x: x.id == variant.id and x.size == size, self.cart))

    def save(self):
        cart_copy = copy.deepcopy(self.cart)
        for item in cart_copy:
            item.product_variant = None
        cart = [asdict(item) for item in cart_copy]
        # cart = list(map(lambda item: setitem(item, 'product_variant', None), cart))
        self.session[settings.CART_SESSION_ID] = cart
        self.session.modified = True

    def remove(self, product_variant, size):
        size = str(size)
        self.cart = list(filterfalse(lambda x: x.id == product_variant.id and x.size == size, self.cart))
        self.save()

    def __iter__(self):
        cart_copy = copy.deepcopy(self.cart)
        for item in cart_copy:
            yield item

    def __len__(self):
        return len(self.cart)

    @property
    def full_price(self):
        price = 0
        for item in self.cart:
            price += item.product_variant.price * item.quantity
        return price

    def serialize(self):
        cart_copy = copy.deepcopy(self.cart)
        for item in cart_copy:
            variant = item.product_variant
            serialized_variant = dict(ProductVariantSerializer(variant).data)
            item.product_variant = serialized_variant
        return [asdict(item) for item in cart_copy]

    def clear(self):
        del self.session[settings.CART_SESSION_ID]
        self.session.modified = True
