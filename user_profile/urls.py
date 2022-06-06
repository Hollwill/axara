from django.urls import path
from .views import profile_view, send_code_to_phone, change_phone_number, OrderListView, OrderDetailView

app_name = 'user_profile'

urlpatterns = [
    path('', profile_view, name='profile'),
    path('orders/', OrderListView.as_view(), name='orders'),
    path('order/<int:pk>', OrderDetailView.as_view(), name='order_detail'),
    path('api/send_code_to_phone', send_code_to_phone, name='send_code_to_phone'),
    path('api/change_phone', change_phone_number, name='change_phone_number')
]
