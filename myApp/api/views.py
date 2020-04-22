from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.views import APIView
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from myApp.models import *
from .serializers import *
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import UpdateModelMixin
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    RetrieveDestroyAPIView,
    RetrieveUpdateAPIView,
    CreateAPIView,
    DestroyAPIView,
)
#
class ContactCreateAPIView(CreateAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()

class ContactListAPIView(ListAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()

class ContactUpdateAPIView(RetrieveUpdateAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()

class ContactDeteleAPIView(RetrieveDestroyAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()
