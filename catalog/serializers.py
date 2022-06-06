from rest_framework import serializers
from .models import ProductVariant, Product, ProductPhoto, Color


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['name']


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['name']


class ProductPhotoSerializer(serializers.ModelSerializer):
    queryset = ProductPhoto.objects.first

    class Meta:
        model = ProductPhoto
        fields = ['photo']


class ProductVariantSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    color = ColorSerializer(read_only=True)
    photos = ProductPhotoSerializer(many=True, read_only=True,)

    class Meta:
        model = ProductVariant
        fields = ['id', 'product', 'color', 'vendor_code', 'price', 'photos']

