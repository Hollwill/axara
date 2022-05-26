from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class ProfileManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().select_related('user')

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    patronymic = models.CharField('Отчество', max_length=200, blank=True)
    birth_date = models.DateField('Дата рождения', null=True, blank=True)

    objects = ProfileManager()


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

