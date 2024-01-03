from django.db import models
from user.models import User
from django.core.exceptions import ValidationError


class Chat(models.Model):
    user1 = models.ForeignKey(User, on_delete=models.CASCADE, related_name="chat_user1", unique=False)
    user2 = models.ForeignKey(User, on_delete=models.CASCADE, related_name="chat_user2", unique=False)

    class Meta:
        unique_together = ('user1', 'user2')

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return f'{self.user1} {self.user2}'
    

class Message(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)

    sender = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="message_sender",
    )
    message = models.CharField(max_length=1000)

    def clean(self):
        if self.sender != self.chat.user1 and self.sender != self.chat.user2:
            raise ValidationError("Sender must be one of the chat participants.")

    def __str__(self) -> str:
        return f"{self.chat.key}, sender={self.sender.username}, text={self.message}"

