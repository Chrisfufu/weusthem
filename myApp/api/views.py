from myApp.models import *
from .serializers import *

from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    RetrieveDestroyAPIView,
    RetrieveUpdateAPIView,
    CreateAPIView,
    DestroyAPIView,
)

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
