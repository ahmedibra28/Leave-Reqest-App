# Generated by Django 3.1 on 2020-08-31 08:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leave', '0005_auto_20200831_0838'),
    ]

    operations = [
        migrations.AlterField(
            model_name='leave_request',
            name='end_date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='leave_request',
            name='start_date',
            field=models.DateField(),
        ),
    ]