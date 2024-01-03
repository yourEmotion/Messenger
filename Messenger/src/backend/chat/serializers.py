from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField
from .models import Chat, Message
from user.serializers import UserSerializer
from user.models import User


class ChatSerializer(ModelSerializer):
    user1 = PrimaryKeyRelatedField(queryset=User.objects.all())
    user2 = PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Chat
        fields = '__all__'


class MessageSerializer(ModelSerializer):
    sender = User

    class Meta:
        model = Message
        fields = '__all__'