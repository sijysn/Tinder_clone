# Generated by Django 3.1.7 on 2021-04-10 05:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_message_good'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='read',
            field=models.BooleanField(default=False),
        ),
    ]