from django.template import loader
from django.http import HttpResponse
from .models import Product, ProductVariant
from .forms import QuestionForm
from django.views.generic import ListView
from cart.cart import Cart, ItemAlreadyExistsException
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
        bookmarks = self.request.GET.get('bookmarks')
        category_slug = self.kwargs.get('category')
        if not category_slug:
            products = Product.preview_objects.all()
        else:
            products = Product.preview_objects.filter(category__slug=category_slug)
        if novelties is not None:
            products = products.filter(is_novelty=True)
        if bookmarks is not None:
            product_ids = self.request.session.get('bookmarks')
            if product_ids:
                products = products.filter(id__in=product_ids)
            else:
                messages.info(self.request, 'В закладках нет ни одного товара')
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
        product_variant = ProductVariant.objects.get(id=request.POST['variant_id'])
        size = request.POST['size']
        try:
            cart.set_quantity(product_variant, size, action='add')
        except ItemAlreadyExistsException:
            messages.info(request, message='Товар уже в корзине')
        else:
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

def switch_bookmark(request, product_id):
    if 'bookmarks' not in request.session:
        request.session['bookmarks'] = []
    if product_id in request.session['bookmarks']:
        request.session['bookmarks'].remove(product_id)

    else:
        request.session['bookmarks'].append(product_id)
    request.session.modified = True
    return redirect(request.META['HTTP_REFERER'])