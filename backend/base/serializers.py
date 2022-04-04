from dataclasses import field
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Produit


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produit
        fields = '__all__'