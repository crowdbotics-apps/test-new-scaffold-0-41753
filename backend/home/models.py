from django.conf import settings
from django.db import models
class Profile(models.Model):
    'Generated Model'
    name = models.CharField(max_length=255,)
    description = models.TextField()
