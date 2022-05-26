from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect


class LoginFormMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        auth_form = AuthenticationForm()
        creation_form = UserCreationForm()
        if request.method == 'POST' and {'is_creation_form', 'is_auth_form'} & {*request.POST.keys()}:
            if 'is_creation_form' in request.POST:
                creation_form = UserCreationForm(request.POST)
                if creation_form.is_valid():
                    creation_form.save()
            elif 'is_auth_form' in request.POST:
                auth_form = AuthenticationForm(request=request, data=request.POST)
                if auth_form.is_valid():
                    auth_form_data = auth_form.cleaned_data
                    username = auth_form_data.get('username')
                    password = auth_form_data.get('password')
                    user = authenticate(username=username, password=password)
                    login(request, user)
            request.method = 'GET'
        request.auth_form = auth_form
        request.creation_form = creation_form

        response = self.get_response(request)
        return response


def logout_middleware(get_response):
    def middleware(request):
        if 'logout' in request.GET:
            logout(request)
            return redirect(request.META.get('HTTP_REFERER'))
        response = get_response(request)
        return response

    return middleware
