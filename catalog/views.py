from django.template import loader
from django.http import HttpResponse
from .models import Product, ProductVariant
from .forms import QuestionForm
from django.views.generic import ListView
from cart.cart import Cart
from django.shortcuts import redirect
from django.contrib import messages


class CatalogView(ListView):
    model = Product
    template_name = 'catalog/catalog.html'
    paginate_by = 30

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        return context

    def get_queryset(self):
        novelties = self.request.GET.get('novelties')
        category_slug = self.kwargs.get('category')
        if not category_slug:
            products = Product.preview_objects.all()
        else:
            products = Product.preview_objects.filter(category__slug=category_slug)
        if novelties is not None:
            products = products.filter(is_novelty=True)
        return products


def product_detail_view(request, category, product_slug):
    variant = ProductVariant.full_objects.get(slug=product_slug, product__category__slug=category)
    product = variant.full_product
    q_a_form = QuestionForm()
    if request.method == 'POST':
        if 'variant_id' in request.POST:
            handle_add_to_cart_form(request)
        if 'is_q_a_form' in request.POST:
            q_a_form = handle_q_a_form(request, variant)

    template = loader.get_template('catalog/detail.html')

    return HttpResponse(template.render({"product": product, "variant": variant, 'q_a_form': q_a_form}, request))


def handle_add_to_cart_form(request):
    if 'size' in request.POST:
        cart = Cart(request)
        cart.add(ProductVariant.objects.get(id=request.POST['variant_id']), request.POST['size'])
        messages.info(request, message='Товар добавлен в корзину')
    else:
        messages.warning(request, message='Выберите размер')


def handle_q_a_form(request, variant):
    q_a_form = QuestionForm(request.POST)
    if q_a_form.is_valid():
        question = q_a_form.save(commit=False)

        question.save()
        variant.questions.add(question)
        variant.save()
        messages.info(request, 'Вопрос оставлен. Ожидайте сообщения на почту.')
        return QuestionForm()
    else:
        return q_a_form