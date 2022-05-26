from django.contrib import admin
from nested_admin.nested import NestedStackedInline, NestedModelAdmin
from .models import Product, ProductVariant, Category, Color, ProductPhoto, Question
from django.contrib.admin.widgets import AdminFileWidget
from django.db import models
from django.utils.html import mark_safe
from django.shortcuts import reverse
from django import forms
from django.forms.widgets import SelectMultiple
from django.template.defaultfilters import escape

class AdminImageWidget(AdminFileWidget):
    def render(self, name, value, attrs=None, renderer=None):
        output = []
        if value and getattr(value, "url", None):
            image_url = value.url
            file_name = str(value)
            output.append(
                u' <a href="%s" target="_blank"><img src="%s" alt="%s" width="150" height="150"  style="object-fit: cover;"/></a> %s ' % \
                (image_url, image_url, file_name, ''))
        output.append(super(AdminFileWidget, self).render(name, value, attrs))
        return mark_safe(u''.join(output))


class PhotosInline(NestedStackedInline):
    model = ProductPhoto
    formfield_overrides = {models.ImageField: {'widget': AdminImageWidget}}


class ColorSelectMultipleWidget(SelectMultiple):
    option_template_name = 'catalog/widgets/product_colors_widget.html'

    def get_context(self, name, value, attrs):
        context = super().get_context(name, value, attrs)
        for option in context['widget']['optgroups']:
            _, opts, _ = option
            for opt in opts:
                opt['color'] = opt['value'].instance.color
        return context


class ProductVariantInline(NestedStackedInline):
    model = ProductVariant
    inlines = [PhotosInline, ]
    # TODO: Добавить ошибку при попытке сохранения с более чем одним чекбоксом показа на превью


class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        widgets = {
            'colors': ColorSelectMultipleWidget
        }
        fields = '__all__'


@admin.register(Product)
class ProductAdmin(NestedModelAdmin):
    inlines = [ProductVariantInline, ]
    form = ProductForm
    list_display = ('name', 'category', 'creation_date')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Color)
class ColorAdmin(admin.ModelAdmin):
    list_display = ('name', 'color_admin_tag')


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('questioner', 'question_date', 'answered')
    readonly_fields = ('product_variant_link',)

    def product_variant_link(self, obj):
        return mark_safe('<a href="{}">{}</a>'.format(
            reverse(f'admin:{obj._meta.app_label}_product_change', args=[obj.product_variant.product.id]),
            escape(obj.product_variant.product.name)
        ))
    product_variant_link.allow_tags = True
    product_variant_link.short_description = 'Ссылка на вариант продукта'
