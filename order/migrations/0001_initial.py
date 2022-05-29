# Generated by Django 4.0.4 on 2022-05-28 07:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('catalog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField()),
                ('size', models.IntegerField(choices=[('42', '42'), ('44', '44'), ('46', '46'), ('48', '48'), ('50', '50'), ('52', '52'), ('54', '54'), ('56', '56'), ('58', '58')])),
                ('price', models.IntegerField()),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='order.order')),
                ('product_variant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='catalog.productvariant')),
            ],
        ),
    ]
