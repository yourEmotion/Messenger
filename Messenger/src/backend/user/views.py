from django.shortcuts import render
from .models import User
from rest_framework import viewsets
from .serializers import UserSerializer


def index(request):
    return render(request, 'index.html', {'users': User.objects.all()})

def react(request):
    return render(request, 'react.html')


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()

        username = self.request.query_params.get('username', None)
        id = self.request.query_params.get('id', None)

        if username:
            queryset = queryset.filter(username=username)
        elif id:
            queryset = queryset.filter(id=id)

        return queryset


