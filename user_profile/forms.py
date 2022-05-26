from django import forms
from .models import Profile
from django.contrib.auth.models import User
from django.contrib.auth.forms import SetPasswordForm
from django.contrib.auth import password_validation
from django.utils.translation import gettext_lazy as _


class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = '__all__'
        exclude = ['user']
        widgets = {'birth_date': forms.DateInput(attrs={'type': 'date'}, format='%Y-%m-%d')}


class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']


class SetUserPasswordForm(SetPasswordForm):
    def __init__(self, *args, **kwargs):
        # first call parent's constructor
        super().__init__(*args, **kwargs)
        # there's a `fields` property now
        self.fields['new_password1'].required = False
        self.fields['new_password2'].required = False