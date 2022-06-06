from django.urls import path
from .views import main, QuestionAnswerListView
from django.views.generic import TemplateView
app_name = 'main'

urlpatterns = [
    path('', main, name='index'),
    path('service/faq', QuestionAnswerListView.as_view(), name='faq'),
    path('service/delivery', TemplateView.as_view(template_name='main/service/delivery.html'),  name='delivery')

]
