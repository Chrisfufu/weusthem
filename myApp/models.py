from django.db import models
from django.contrib.auth.models import User
from django.utils.crypto import get_random_string
import uuid
# Create your models here.

class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    firstName = models.TextField(null=True)
    lastName = models.TextField(null=True)
    email = models.TextField(null=True)
    phone = models.IntegerField(null=True)
    photo = models.ImageField(upload_to='photos',null=True)
    class Meta:
        verbose_name = "Contact"
        db_table = "Contact"
