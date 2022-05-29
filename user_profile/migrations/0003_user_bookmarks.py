# Generated by Django 4.0.4 on 2022-05-29 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0003_alter_productvariant_slug'),
        ('user_profile', '0002_alter_user_managers'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='bookmarks',
            field=models.ManyToManyField(blank=True, default=None, related_name='bookmark_users', to='catalog.product'),
        ),
    ]