from django.db import models
from sorl.thumbnail import ImageField


class IndexItem(models.Model):
    title = models.CharField(max_length=200)
    on_carousel = models.BooleanField()
    subtitle = models.CharField(max_length=200)
    photo = ImageField(upload_to='index/%Y/%m/%d/')
    link = models.CharField(max_length=200)
