from django.views.generic import ListView
from .models import Store
from django.conf import settings

class StoreListView(ListView):
    model = Store
    context_object_name = 'stores'
    template_name = 'store/store_list.html'
    extra_context = {'maps_api_key': settings.YANDEX_MAPS_API_KEY}
