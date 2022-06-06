from django.db import models
from colorfield.fields import ColorField
from multiselectfield import MultiSelectField
from sorl.thumbnail import ImageField
from django.utils.html import escape, mark_safe
from django.urls import reverse
from pytils.translit import slugify
from django.contrib.auth import get_user_model

SIZES = tuple((str(i), str(i)) for i in range(42, 60, 2))
"""Используются: фото(o2m), категория, название, цена, размеры"""

User = get_user_model()


class PreviewProductManager(models.Manager):

    def get_queryset(self):
        q_product_variant = ProductVariant.objects.prefetch_related('photos').filter(show_on_preview=True)
        p_product_variant = models.Prefetch('variants', queryset=q_product_variant, to_attr='preview_variant')

        return super() \
            .get_queryset() \
            .filter(is_active=True) \
            .select_related('category') \
            .prefetch_related(p_product_variant)


class FullProductManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset().filter(is_active=True) \
            .prefetch_related('variants__color') \
            .select_related('category')


class Product(models.Model):
    name = models.CharField('Название', max_length=200, )

    is_active = models.BooleanField("Доступно", default=False)
    is_novelty = models.BooleanField('Новинка', default=False)
    category = models.ForeignKey("Category", verbose_name='Категория', related_name='products',
                                 on_delete=models.DO_NOTHING)

    sizes = MultiSelectField('Размеры', choices=SIZES)
    fabric_structure = models.CharField('Состав', max_length=200, )
    description = models.TextField('Описание')
    # exists_in_magazines = допилить когда начну писать вкладку магазины

    creation_date = models.DateTimeField('Дата создания', auto_now_add=True)

    objects = models.Manager()
    full_objects = FullProductManager()
    preview_objects = PreviewProductManager()

    class Meta:
        ordering = ['-creation_date']
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'

    def get_absolute_url(self):
        return reverse('catalog:product_detail', kwargs={
            'category': self.category.slug,
            'product_slug': self.variants.first().slug,
        })


class CartProductVariantManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().select_related('product').prefetch_related('photos')


class FullProductVariantManager(models.Manager):

    def get_queryset(self):
        q_product_variants = Product.full_objects.all()
        p_product_variants = models.Prefetch('product', queryset=q_product_variants, to_attr='full_product')
        return super().get_queryset() \
            .prefetch_related(p_product_variants, 'photos', 'questions') \
            .select_related('color')


class ProductVariant(models.Model):
    product = models.ForeignKey("Product", on_delete=models.CASCADE, related_name='variants')
    show_on_preview = models.BooleanField('Показывать на превью', default=False)
    color = models.ForeignKey("Color", verbose_name='цвет', on_delete=models.SET_DEFAULT, default=1)
    vendor_code = models.CharField('артикул', max_length=200)
    price = models.IntegerField('цена')
    slug = models.SlugField('чпу', unique=True, null=True, blank=True)

    objects = models.Manager()
    cart_objects = CartProductVariantManager()
    full_objects = FullProductVariantManager()

    class Meta:
        verbose_name = 'вариант продукта'
        verbose_name_plural = 'варианты продукта'

    def __str__(self):
        return f'{self.product.name} - {self.color.name}'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = f'{slugify(self.product.name)}-{slugify(self.color.name)}'
        super().save(*args, **kwargs)

    def size_is_valid(self, size):
        return str(size) in self.product.sizes

    def get_absolute_url(self):
        return reverse('catalog:product_detail', kwargs={
            'category': self.product.category.slug,
            'product_slug': self.slug,
        })


class Category(models.Model):
    name = models.CharField('название', max_length=200)
    slug = models.SlugField('чпу', unique=True)

    class Meta:
        verbose_name = 'категория'
        verbose_name_plural = 'категории'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('catalog:category', kwargs={'category': self.slug})


class ProductPhoto(models.Model):
    product_variant = models.ForeignKey("ProductVariant", related_name='photos', on_delete=models.CASCADE)
    photo = ImageField('фото', upload_to='photos/%Y/%m/%d/')

    def __str__(self):
        return f'фотография - {self.product_variant.product.name}'

    class Meta:
        verbose_name = 'фотография варианта продукта'
        verbose_name_plural = 'фотографии варианта продукта'

    def image_tag(self):
        return '<img src="%s" />' % escape(self.photo.url)

    image_tag.short_description = 'Photo'
    image_tag.allow_tags = True


# TODO: https://www.charuel.ru/catalogue/odezhda/platya/plate-zhenskoe-_289/
class Question(models.Model):
    text = models.TextField('Вопрос')
    questioner = models.CharField('Имя', max_length=200)
    email = models.EmailField('Почта')
    question_date = models.DateField('дата вопроса', auto_now_add=True)
    product_variant = models.ForeignKey("ProductVariant", verbose_name='вариант продукта', null=True,
                                        related_name='questions', on_delete=models.CASCADE)
    answer = models.TextField('ответ', null=True)
    answer_date = models.DateField('дата ответа', null=True)

    def answered(self):
        return bool(self.answer)

    answered.boolean = True

    class Meta:
        ordering = ['-question_date']
        verbose_name = 'Вопрос'
        verbose_name_plural = 'Вопросы'


class Color(models.Model):
    name = models.CharField('название цвета', max_length=200)
    color = ColorField('цвет', default='#FF0000')

    class Meta:
        verbose_name = 'Цвет'
        verbose_name_plural = 'Цвета'

    def __str__(self):
        return self.name

    def color_admin_tag(self):
        return mark_safe('<div style="background-color: %s; width: 16px; height: 16px" ></div>' % self.color)

    color_admin_tag.allow_tags = True
    color_admin_tag.short_description = 'Изображение'
