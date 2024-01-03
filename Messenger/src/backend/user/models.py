from django.db import models
from django.contrib.auth.models import AbstractUser


def upload_avatar_path(username, filename):
    return f"images/avatar/{username}.png"


class User(AbstractUser):
    first_name = models.CharField(max_length=64, blank=False)
    last_name = models.CharField(max_length=64, blank=False)
    avatar = models.ImageField(upload_to=upload_avatar_path, default="images/avatar/user_img.png")
    city = models.CharField(max_length=64)
    birth_date = models.DateField(default='2000-01-01')
    friends = models.ManyToManyField("self", blank=True)
    about = models.TextField(blank=True)

    def __str__(self):
        return self.username