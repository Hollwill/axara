from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Store(models.Model):
    name = models.CharField('Название магазина', max_length=255)
    address = models.CharField('Адрес', max_length=255)
    work_shedule = models.CharField('График работы', max_length=255)
    phone = PhoneNumberField('Номер телефона')
    altitude = models.CharField('Широта', max_length=255)
    longitude = models.CharField('Долгота', max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Магазин'
        verbose_name_plural = 'Магазины'
