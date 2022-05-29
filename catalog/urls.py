from django.urls import path
from .views import CatalogView, product_detail_view, switch_bookmark

app_name = 'catalog'

urlpatterns = [
    path('', CatalogView.as_view(), name='catalog'),
    path('<slug:category>', CatalogView.as_view(), name='category'),
    path('<slug:category>/<slug:product_slug>', product_detail_view, name='product_detail'),
    path('bookmarks/add/<int:product_id>', switch_bookmark, name='add_bookmark'),

]
