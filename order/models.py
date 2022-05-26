from django.db import models
from user_profile.models import Profile
from catalog.models import ProductVariant, SIZES
from functools import reduce


class Order(models.Model):
    profile = models.ForeignKey(Profile, null=True, on_delete=models.CASCADE)

    @property
    def full_price(self):
        return reduce(lambda x, y: x.product_variant.price + y.product_variant.price, self.items.all())


class OrderItem(models.Model):
    order = models.ForeignKey('Order', related_name='items', on_delete=models.CASCADE)
    product_variant = models.ForeignKey(ProductVariant, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    size = models.IntegerField(choices=SIZES)
    price = models.IntegerField()
