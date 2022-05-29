from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model

User = get_user_model()


class NumberModelBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        if username is None and password is None and 'sms_code' in request.session:
            sms_code = request.session['sms_code']
            form_sms_code = kwargs['sms_code']
            phone = request.session['phone']
            if sms_code == form_sms_code:
                try:
                    return User.objects.get(phone_number=f'+7{phone}')
                except User.DoesNotExist:
                    ...
            else:
                return
