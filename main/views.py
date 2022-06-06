from django.template import loader
from django.http import HttpResponse
from .models import IndexItem, QuestionAnswer
from django.views.generic import ListView


def main(request):
    template = loader.get_template('main/index_content.html')
    index_items_carousel = IndexItem.objects.filter(on_carousel=True)
    index_items = IndexItem.objects.filter(on_carousel=False)

    return HttpResponse(template.render({
        'carousel_items': index_items_carousel,
        'index_items': index_items}, request))


class QuestionAnswerListView(ListView):
    model = QuestionAnswer
    context_object_name = 'questions'
    template_name = 'main/service/questions_answers.html'
