from django.http import HttpResponse
from django.template import loader
from django.contrib.auth.decorators import login_required
from .models import Profile
from .forms import ProfileForm, UserForm, SetUserPasswordForm
from django.contrib import messages
from django.shortcuts import redirect
from django.contrib.auth import logout


@login_required(login_url='/')
def profile_view(request):
    template = loader.get_template('user_profile/profile_data.html')
    profile = Profile.objects.get(user_id=request.user.id)
    user_form = UserForm(instance=request.user)
    profile_form = ProfileForm(instance=profile)
    change_password_form = SetUserPasswordForm(request.user)
    if request.method == 'POST':
        user_form = UserForm(request.POST, instance=request.user)
        if user_form.is_valid():
            user_form.save()
        profile_form = ProfileForm(request.POST, instance=profile)
        if profile_form.is_valid():
            profile_form.save()
        change_password_form = SetUserPasswordForm(request.user, request.POST)
        if change_password_form.is_valid():
            change_password_form.save()
            messages.add_message(request, messages.INFO, 'Пароль был изменён')
            logout(request)
            return redirect('main:index')
        if not change_password_form.cleaned_data.get('new_password1'):
            change_password_form = SetUserPasswordForm(request.user)

    return HttpResponse(template.render({
        'profile': profile,
        'profile_form': profile_form,
        'user_form': user_form,
        'change_password_form': change_password_form
    }, request))
