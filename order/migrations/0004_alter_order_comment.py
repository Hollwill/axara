# Generated by Django 4.0.4 on 2022-05-29 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0003_order_comment_order_deliver_address_order_locality'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='comment',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Комментарий'),
        ),
    ]
