from rest_framework import serializers
from myApp.models import *
from rest_framework import serializers
from rest_framework.serializers import (
    ModelSerializer,
)
from django.core.validators import validate_email

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

    # def validate_email(self, value):
    #     data = self.get_initial()
    #     email = value
    #     print(email)
    #     # needs to fix. if is_active == 0, need to delete the existing user and raise no error
    #     validate_email(email)
        # return value
