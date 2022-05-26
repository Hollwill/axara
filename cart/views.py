from cart.cart import Cart
from django.http import JsonResponse
import json
from django.http import HttpResponseBadRequest


def get_data(request):
    cart = Cart(request)
    body = json.loads(request.body)
    cart_item_data = cart.cart[str(body['product_variant_id'])][str(body['size'])]
    return cart, body, cart_item_data


def add_quantity(request):
    try:
        cart, _, cart_item_data = get_data(request)
        cart_item_data['quantity'] += 1
        cart.save()
    except:
        return HttpResponseBadRequest()
    return JsonResponse({'full_price': cart.full_price})


def sub_quantity(request):
    try:
        cart, body, cart_item_data = get_data(request)
        if cart_item_data['quantity'] == 1:
            del cart.cart[str(body['product_variant_id'])][str(body['size'])]
        else:
            cart_item_data['quantity'] -= 1
        cart.save()
    except:
        return HttpResponseBadRequest()
    return JsonResponse({'full_price': cart.full_price})


def remove_from_cart(request):
    try:
        cart, body, _ = get_data(request)
        del cart.cart[str(body['product_variant_id'])][str(body['size'])]
        cart.save()
    except:
        return HttpResponseBadRequest()
    return JsonResponse({'full_price': cart.full_price})


# order api function
def get_cart(request):
    cart = Cart(request)
    return JsonResponse({'cart': cart.serialize()})


def full_price(request):
   cart = Cart(request)
   return JsonResponse({'full_price': cart.full_price})