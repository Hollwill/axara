# Generated by Django 4.0.4 on 2022-05-22 04:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0003_alter_question_product_variant'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='question',
            options={'ordering': ['-question_date']},
        ),
        migrations.AlterField(
            model_name='question',
            name='product_variant',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='questions', to='catalog.productvariant'),
        ),
    ]