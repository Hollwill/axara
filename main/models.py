from django.db import models
from sorl.thumbnail import ImageField
from ckeditor.fields import RichTextField


class IndexItem(models.Model):
    title = models.CharField('надпись', max_length=200)
    on_carousel = models.BooleanField('В карусели')
    subtitle = models.CharField('подпись', max_length=200)
    photo = ImageField('изображение', upload_to='index/%Y/%m/%d/')
    link = models.CharField('ссылка', max_length=200)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Баннер на главной'
        verbose_name_plural = 'Баннеры на главной'


class QuestionAnswer(models.Model):
    title = models.CharField('вопрос', max_length=255)
    answer = RichTextField('Ответ')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Вопрос-ответ'
        verbose_name_plural = 'Вопросы-ответы'