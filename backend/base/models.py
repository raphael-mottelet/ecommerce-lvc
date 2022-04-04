from audioop import add
from pickle import TRUE
from re import T
from ssl import create_default_context
from unicodedata import category
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Produit(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank= False)
    image = models.ImageField(null=True, blank=True)
    brand = models.CharField(max_length=200, null=True, blank= False)
    category = models.CharField(max_length=200, null=True, blank= False)
    description = models.TextField(null=True, blank= False)
    rating = models.DecimalField(max_digits=7, decimal_places=2)
    numReviews = models.IntegerField(null= True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=False)

    def __str__(self):
        return self.name

class Reaction(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    product = models.ForeignKey(Produit, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank= False)
    rating = models.IntegerField(null= True, blank=True, default=0)
    comment = models.TextField(null=True, blank= False)


    def __str__(self):
        return str(self.rating)

class Commande(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank= False)
    taxPrice = models.DecimalField(max_digits=7, decimal_places=2)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2)
    totalPrice = models.DecimalField(max_digits=7, decimal_places=2)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True,)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    
    def __str__(self):
        return str(self.createdAt)
    

class ItemCommande(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    product = models.ForeignKey(Produit, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Commande, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank= False)
    quantity = models.IntegerField(null= True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    image = models.CharField(max_length=200, null=True, blank= False)

    def __str__(self):
        return str(self.name)

class AdresseLivraison(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    order = models.OneToOneField(Commande, on_delete=models.CASCADE, null=True, blank=True)
    adress = models.CharField(max_length=200, null=True, blank= False)
    city = models.CharField(max_length=200, null=True, blank= False)
    postalCode = models.CharField(max_length=200, null=True, blank= False)
    country = models.CharField(max_length=200, null=True, blank= False)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return str(self.adress)