from django.views.decorators.http import require_POST
from django.http import JsonResponse
import json
from django.contrib.auth import get_user_model
from .models import Order, OrderItem
from catalog.models import ProductVariant
from cart.cart import Cart

User = get_user_model()

@require_POST
def create_order(request):
    request_data = json.loads(request.body)
    order_data = request_data['order_data']
    if not request.user.is_authenticated:
        phone_number = f'+7{order_data["phone"]}'
        try:
            user = User.objects.get(phone_number=phone_number)
        except User.DoesNotExist:
            user = User(
                phone_number=phone_number,
                email=order_data['email'],
                first_name=order_data['name'],
                last_name=order_data['subname']
            )
            user.save()
    else:
        user = request.user
    order = Order(
        user=user,
        locality=order_data['locality'],
        deliver_address=order_data['deliver_address'],
        comment=order_data.get('comment'),
    )
    order.save()
    product_variants = ProductVariant.objects.filter(id__in=(item['product_variant']for item in request_data['cart']))
    for item in request_data['cart']:
        product_variant = product_variants.get(id=item['product_variant'])
        item = OrderItem(
            order=order,
            product_variant=product_variant,
            quantity=item['quantity'],
            size=item['size'],
            price=product_variant.price * item['quantity']
        )
        item.save()
    cart = Cart(request)
    cart.clear()
    #TODO: Перенаправление на страницу оплаты
    return JsonResponse({'redirect_url': ''})
