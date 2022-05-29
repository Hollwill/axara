from django.db import models
from catalog.models import ProductVariant, SIZES
from functools import reduce
from django.contrib.auth import get_user_model

User = get_user_model()


class Order(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    locality = models.CharField('Местоположение', max_length=255)
    deliver_address = models.CharField('Адрес доставки', max_length=255)
    comment = models.CharField('Комментарий', blank=True, null=True, max_length=255)

    @property
    def full_price(self):
        return reduce(lambda x, y: x.price + y.price, self.items.all())


class OrderItem(models.Model):
    order = models.ForeignKey('Order', related_name='items', on_delete=models.CASCADE)
    product_variant = models.ForeignKey(ProductVariant, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    size = models.CharField(choices=SIZES, max_length=2)
    price = models.IntegerField()
