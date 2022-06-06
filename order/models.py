from django.db import models
from catalog.models import ProductVariant, SIZES
from functools import reduce
from django.contrib.auth import get_user_model
from django.urls import reverse

User = get_user_model()


class Order(models.Model):
    user = models.ForeignKey(User, verbose_name='Пользователь', null=True, on_delete=models.CASCADE)
    locality = models.CharField('Местоположение', max_length=255)
    deliver_address = models.CharField('Адрес доставки', max_length=255)
    comment = models.TextField('Комментарий', blank=True, null=True, max_length=255)
    is_paid = models.BooleanField('Заказ оплачен', default=False)
    makes_date = models.DateField('Дата добавления', auto_now_add=True)

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'

    def order_id(self):
        return self.id

    order_id.short_description = 'Номер заказа'

    def short_comment(self):
        return self.comment[:30] if self.comment else ''

    short_comment.short_description = 'комментарий'

    @property
    def photo(self):
        return self.items.first().product_variant.photos.first().photo.url

    @property
    def full_price(self):
        return reduce(lambda x, y: x.price + y.price, self.items.all())

    def get_absolute_url(self):
        return reverse('user_profile:order_detail', kwargs={'pk': self.pk})


class OrderItem(models.Model):
    order = models.ForeignKey('Order', verbose_name='заказ', related_name='items', on_delete=models.CASCADE)
    product_variant = models.ForeignKey(ProductVariant, verbose_name='Вариант продукта', on_delete=models.CASCADE)
    quantity = models.IntegerField('Количество')
    size = models.CharField('Размер', choices=SIZES, max_length=2)
    price = models.IntegerField('Цена')

    class Meta:
        verbose_name = 'Предмет заказа'
        verbose_name_plural = 'Предметы заказа'