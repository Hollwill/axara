from django.urls import path
from .views import change_cart_item, full_price, get_cart

app_name = 'cart'

urlpatterns = [
    path('get_cart', get_cart, name='get_cart'),
    path('add_quantity', change_cart_item, {'action': 'add'}, name='add'),
    path('sub_quantity', change_cart_item, {'action': 'sub'}, name='sub'),
    path('remove_from_cart', change_cart_item, {'action': 'remove'}, name='sub'),
    path('full_price', full_price, name='full_price'),
]
