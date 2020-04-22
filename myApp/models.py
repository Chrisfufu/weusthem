from django.db import models
from django.contrib.auth.models import User
from django.utils.crypto import get_random_string
from django.core.validators import RegexValidator
from django.core.validators import validate_email
# Create your models here.

class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    firstName = models.TextField(null=True)
    lastName = models.TextField(null=True)
    email = models.EmailField(
                null=True, validators=[validate_email],
                error_messages={'required': 'Please provide your email address.',
                        'unique': 'An account with this email exist.'}
                )
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phone = models.CharField(validators=[phone_regex], max_length=17, blank=True)
    photo = models.ImageField(upload_to='photos',null=True)
    class Meta:
        verbose_name = "Contact"
        db_table = "Contact"
