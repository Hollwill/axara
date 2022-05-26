from django.views.generic import TemplateView
from django.urls import path
from .views import create_order

app_name = 'order'

urlpatterns = [
    path('make', TemplateView.as_view(template_name='order/create.html'), name='make'),
    path('create', create_order, name='create')
]
