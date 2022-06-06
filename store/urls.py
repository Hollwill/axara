from django.urls import path
from .views import StoreListView

app_name = 'stores'

urlpatterns = [
    path('', StoreListView.as_view(), name='store_list'),

]