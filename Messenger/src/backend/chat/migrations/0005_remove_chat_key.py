# Generated by Django 3.2 on 2023-12-20 17:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0004_alter_chat_key'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chat',
            name='key',
        ),
    ]
