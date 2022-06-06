from django.http import HttpResponse
from django.template import loader

from django.views.generic import ListView, DetailView
from django.contrib.auth.decorators import login_required
from order.models import Order
from .forms import UserForm, SetUserPasswordForm
from django.contrib import messages
from django.shortcuts import redirect
from django.contrib.auth import logout
import json
from django.http import JsonResponse
from random import randint
from django.http import HttpResponseBadRequest
from django.contrib.auth import get_user_model

User = get_user_model()


@login_required(login_url='/')
def profile_view(request):
    template = loader.get_template('user_profile/profile_data.html')

    user_form = UserForm(instance=request.user)
    change_password_form = SetUserPasswordForm(request.user)
    if request.method == 'POST':
        if 'confirmation_code' in request.POST:
            user = request.user
            if request.POST['confirmation_code'] == request.session['code']:
                user.phone_number = f'+7{request.session["new_phone"]}'
                user.save()
                user_form = UserForm(instance=request.user)
                messages.add_message(request, messages.INFO, 'Номер телефона изменен успешно')

        if 'is_user_form' in request.POST:
            user_form = UserForm(request.POST, instance=request.user)
            if user_form.is_valid():
                user_form.save()

            change_password_form = SetUserPasswordForm(request.user, request.POST)
            if change_password_form.is_valid():
                change_password_form.save()
                messages.add_message(request, messages.INFO, 'Пароль был изменён')
                logout(request)
                return redirect('main:index')
            if not change_password_form.cleaned_data.get('new_password1'):
                change_password_form = SetUserPasswordForm(request.user)

    return HttpResponse(template.render({
        'user_form': user_form,
        'change_password_form': change_password_form
    }, request))


class OrderListView(ListView):
    template_name = 'user_profile/order_list.html'
    context_object_name = 'orders'

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)


class OrderDetailView(DetailView):
    template_name = 'user_profile/order_detail.html'
    model = Order


def send_code_to_phone(request):
    body = json.loads(request.body)
    phone = body['phone_number']
    session = request.session
    session['phone'] = phone
    code = randint(1000, 9999)
    code = 1111
    session['sms_code'] = str(code)
    try:
        user = User.objects.get(phone_number=f'+7{phone}')
    except User.DoesNotExist:
        return HttpResponseBadRequest('Пользователя с таким номером телефона не существует')

    # TODO: Здесь будет логика отправки смс
    return JsonResponse(dict())


def change_phone_number(request):
    body = json.loads(request.body)
    phone = body['new_phone']
    code = randint(1000, 9999)
    code = 1111

    # Отправка кода пользователю
    request.session['new_phone'] = phone
    request.session['code'] = str(code)
    return JsonResponse(dict())
