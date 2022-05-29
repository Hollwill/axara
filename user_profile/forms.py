from django import forms
from .models import User

from django.contrib.auth import get_user_model
from django.contrib.auth.forms import SetPasswordForm
from django.contrib.auth import password_validation
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.forms import UserCreationForm, UsernameField


class EmailPhonenumberUserCreationForm(UserCreationForm):
    class Meta:
        model = get_user_model()
        fields = ("phone_number", "email")


# class ProfileForm(forms.ModelForm):
#     class Meta:
#         model = Profile
#         fields = '__all__'
#         exclude = ['user']
#         widgets = {'birth_date': forms.DateInput(attrs={'type': 'date'}, format='%Y-%m-%d')}


class UserForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        instance = getattr(self, 'instance', None)
        if instance and instance.pk:
            self.fields['phone_number'].widget.attrs['readonly'] = True

    def clean_phone_number(self):
        instance = getattr(self, 'instance', None)
        if instance and instance.pk:
            return instance.phone_number
        else:
            return self.cleaned_data['phone_number']

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'patronymic', 'email', 'birth_date', 'phone_number']
        widgets = {'birth_date': forms.DateInput(attrs={'type': 'date'}, format='%Y-%m-%d')}


class SetUserPasswordForm(SetPasswordForm):
    def __init__(self, *args, **kwargs):
        # first call parent's constructor
        super().__init__(*args, **kwargs)
        # there's a `fields` property now
        self.fields['new_password1'].required = False
        self.fields['new_password2'].required = False
