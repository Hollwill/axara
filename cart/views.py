from cart.cart import Cart
from django.http import JsonResponse
import json
from typing import Optional, Literal
from django.http import HttpResponseBadRequest
from catalog.models import ProductVariant


def change_cart_item(request, action: Optional[Literal['add', 'sub', 'remove']]):
    try:
        cart = Cart(request)
        body = json.loads(request.body)
        product_variant_id, size = body['product_variant_id'], body['size']
        product_variant = ProductVariant.objects.get(id=product_variant_id)

        match action:
            case 'add' | 'sub':
                cart.set_quantity(product_variant, size, action)
            case 'remove':
                cart.remove(product_variant, size)
    except:
        return HttpResponseBadRequest()
    else:
        return JsonResponse({'full_price': cart.full_price})

# order api function
def get_cart(request):
    cart = Cart(request)
    return JsonResponse({'cart': cart.serialize()})


def full_price(request):
    cart = Cart(request)
    return JsonResponse({'full_price': cart.full_price})