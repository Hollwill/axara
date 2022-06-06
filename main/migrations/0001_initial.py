# Generated by Django 4.0.4 on 2022-06-06 10:53

import ckeditor.fields
from django.db import migrations, models
import sorl.thumbnail.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='IndexItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='надпись')),
                ('on_carousel', models.BooleanField(verbose_name='В карусели')),
                ('subtitle', models.CharField(max_length=200, verbose_name='подпись')),
                ('photo', sorl.thumbnail.fields.ImageField(upload_to='index/%Y/%m/%d/', verbose_name='изображение')),
                ('link', models.CharField(max_length=200, verbose_name='ссылка')),
            ],
            options={
                'verbose_name': 'Баннер на главной',
                'verbose_name_plural': 'Баннеры на главной',
            },
        ),
        migrations.CreateModel(
            name='QuestionAnswer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='вопрос')),
                ('answer', ckeditor.fields.RichTextField(verbose_name='Ответ')),
            ],
            options={
                'verbose_name': 'Вопрос-ответ',
                'verbose_name_plural': 'Вопросы-ответы',
            },
        ),
    ]
