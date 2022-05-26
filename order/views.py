from django.views.decorators.http import require_POST
from django.http import JsonResponse
import json

@require_POST
def create_order(request):
    request_data = json.loads(request.body)

    ...