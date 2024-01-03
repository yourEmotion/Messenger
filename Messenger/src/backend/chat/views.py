from .models import Chat, Message
from rest_framework import viewsets
from .serializers import ChatSerializer, MessageSerializer


class ChatViewSet(viewsets.ModelViewSet):
    serializer_class = ChatSerializer
    queryset = Chat.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()

        key = self.request.query_params.get('key', None)
        user1 = self.request.query_params.get('user1', None)
        user2 = self.request.query_params.get('user2', None)

        if key:
            queryset = queryset.filter(key=key)
        if user1:
            queryset = queryset.filter(user1=user1)
        if user2:
            queryset = queryset.filter(user2=user2)

        return queryset


class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    queryset = Message.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()

        chat = self.request.query_params.get('chat', None)

        if chat:
            queryset = queryset.filter(chat=chat)

        return queryset

