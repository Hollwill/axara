from catalog.models import Category
from cart.cart import Cart


def nav_categories(request):
    context_extras = {"nav_categories": Category.objects.all()}
    return context_extras


def cart(request):
    cart = Cart(request)
    context_extras = {'cart': list(cart), 'cart_obj': cart}
    return context_extras
