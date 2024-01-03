from django.urls import path, include
from .views import index, react


urlpatterns = [
    path('', index, name='index'),
    path('react', react, name='react'),
]