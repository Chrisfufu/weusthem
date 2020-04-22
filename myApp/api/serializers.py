from rest_framework import serializers
from myApp.models import *
from django.db.models import Q
from django.contrib.auth.models import User, Group
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.db import transaction
import uuid
from django.utils import timezone
from django.core.mail import EmailMessage
from django.conf import settings
from django.contrib.auth.validators import UnicodeUsernameValidator
from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField,
    CharField,
    EmailField,
    ValidationError,
    HyperlinkedIdentityField,
    ListSerializer,
    Serializer
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
