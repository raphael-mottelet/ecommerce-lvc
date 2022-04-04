from django.db import models
from audioop import add
from pickle import TRUE
from re import T
from ssl import create_default_context
from unicodedata import category
from django.contrib.auth.models import User

# Create your models here.

class Carousel(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    titre = models.CharField(max_length=200, null=True, blank= False)
    description = models.TextField(null=True, blank= False)
    image = models.ImageField(null=True, blank=False)
    imagePromo = models.ImageField(null=True, blank=True)
    categorie = models.CharField(max_length=200, null=True, blank= False)
    createdAt = models.DateTimeField(auto_now_add=False)

    def __str__(self):
        return self.titre

class PubliciteImage(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    titre = models.CharField(max_length=200, null=True, blank= False)
    description = models.TextField(null=True, blank= False)
    typePage = models.CharField(max_length=200, null=True, blank= False)
    emplacement = models.IntegerField(null= True, blank=True, default=0)
    url = models.CharField(max_length=200, null=True, blank= False)
    image = models.ImageField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=False)

    def __str__(self):
        return self.titre

class LogoSite(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    image = models.ImageField(null=True, blank=False)

    def __str__(self):
        return self.image

