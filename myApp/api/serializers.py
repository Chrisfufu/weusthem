from rest_framework import serializers
from myApp.models import *
from rest_framework import serializers
from rest_framework.serializers import (
    ModelSerializer,
)


class ContactSerializer(ModelSerializer):
    class Meta:
        model = Contact
        fields = [
            'id',
            'firstName',
            'lastName',
            'email',
            'phone',
            'photo'
        ]
