# Generated by Django 3.2 on 2023-12-08 08:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='chat',
            name='key',
            field=models.CharField(default='<django.db.models.fields.related.ForeignKey> <django.db.models.fields.related.ForeignKey>', max_length=64),
        ),
    ]