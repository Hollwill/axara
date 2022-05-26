from django.urls import path
from .views import add_quantity, sub_quantity, remove_from_cart, full_price, get_cart

app_name = 'cart'

urlpatterns = [
    path('get_cart', get_cart, name='get_cart'),
    path('add_quantity', add_quantity, name='add'),
    path('sub_quantity', sub_quantity, name='sub'),
    path('remove_from_cart', remove_from_cart, name='sub'),
    path('full_price', full_price, name='full_price'),
]
