from django.conf import settings
import copy
from catalog.models import ProductVariant
from catalog.serializers import ProductVariantSerializer


class Cart:
    def __init__(self, request):
        self.session = request.session

        if not (cart := self.session.get(settings.CART_SESSION_ID)):
            cart = self.session[settings.CART_SESSION_ID] = {}
        self.cart = cart

    def add(self, product_variant, size, quantity=1, update_quantity=False):
        if size in product_variant.product.sizes:
            product_variant_id = str(product_variant.id)
            size = str(size)
            if product_variant_id not in self.cart:
                self.cart[product_variant_id] = {}
            if size not in self.cart[product_variant_id]:
                self.cart[product_variant_id][size] = {'quantity': 0}

            if update_quantity:
                self.cart[product_variant_id][size]['quantity'] = quantity
            else:
                self.cart[product_variant_id][size]['quantity'] += quantity
            self.save()

    def save(self):
        self.session[settings.CART_SESSION_ID] = self.cart
        self.session.modified = True

    def remove(self, product_variant, size):
        product_variant_id = str(product_variant.id)
        size = str(size)
        if product_variant_id in self.cart:
            del self.cart[product_variant_id][size]
            if not self.cart[product_variant_id]:
                del self.cart[product_variant_id]
            self.save()

    def __iter__(self):
        cart_copy = copy.deepcopy(self.cart)
        product_variant_ids = cart_copy.keys()
        product_variants = ProductVariant.cart_objects.filter(id__in=product_variant_ids)
        for product_variant in product_variants:
            for size in cart_copy[str(product_variant.id)].values():
                size['product_variant'] = product_variant

        for product_variant_data in cart_copy.values():
            for size, data in product_variant_data.items():
                data['size'] = int(size)

                yield data

    def __len__(self):
        count = 0
        for product_variant in self.cart.values():
            for size in product_variant.values():
                count += size['quantity']
            return count

    @property
    def full_price(self):
        price = 0
        cart_items = list(self)
        for item in cart_items:
            price += item['product_variant'].price * item['quantity']
        return str(price)

    def serialize(self):
        cart_items = list(self)
        for item in cart_items:
            variant = item['product_variant']
            serialized_variant = ProductVariantSerializer(variant)
            item['product_variant'] = serialized_variant.data
        return cart_items

    def clear(self):
        del self.session[settings.CART_SESSION_ID]
        self.session.modified = True
