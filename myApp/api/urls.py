from django.conf.urls import url
from django.contrib import admin
from django.conf.urls.static import static
from .views import *
from django.conf import settings

urlpatterns = [
    url(r'^create/$', ContactCreateAPIView.as_view(), name='create'),
    url(r'^view/$', ContactListAPIView.as_view(), name='create')
] 
