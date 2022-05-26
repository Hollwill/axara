from django.shortcuts import render

from django.template import loader
from django.http import HttpResponse
from .models import IndexItem
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.shortcuts import redirect, reverse


def main(request):
    template = loader.get_template('main/index_content.html')
    index_items_carousel = IndexItem.objects.filter(on_carousel=True)
    index_items = IndexItem.objects.filter(on_carousel=False)
    # auth_form = AuthenticationForm()
    # creation_form = UserCreationForm()
    # if request.method == 'POST':
    #     if request.POST.get('is_creation_form'):
    #         creation_form = UserCreationForm(request.POST)
    #         if creation_form.is_valid():
    #             creation_form.save()
    #     elif request.POST.get('is_auth_form'):
    #         auth_form = AuthenticationForm(request=request, data=request.POST)
    #         if auth_form.is_valid():
    #             auth_form_data = auth_form.cleaned_data
    #             username = auth_form_data.get('username')
    #             password = auth_form_data.get('password')
    #             user = authenticate(username=username, password=password)
    #             login(request, user)
    #             return redirect('main:index')

    return HttpResponse(template.render({
        # 'auth_form': auth_form, 'creation_form': creation_form,
        'carousel_items': index_items_carousel,
         'index_items': index_items}, request))