from django.urls import path
from .views import CatalogView, product_detail_view

app_name = 'catalog'

urlpatterns = [
    path('', CatalogView.as_view(), name='catalog'),
    path('<slug:category>', CatalogView.as_view(), name='category'),
    path('<slug:category>/<slug:product_slug>', product_detail_view, name='product_detail'),
]
