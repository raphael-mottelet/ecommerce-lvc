from email.policy import HTTP
from itertools import product
from math import ceil, prod
from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
#on importe ci dessous du code permettant de créer des restrictions en fonction du type d'utilisateur et si l'utilisateur est connecté ou non
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Reaction
from base.models import Produit
from base.products import products
from base.serializers import ProductSerializer


#on importe une fonction qui va permettre de hash le mot de passe des utilisateurs
#on importe status pour les messages d'erreur
from  rest_framework import status

def index(request):
    products= product.objects.all()
    allProds=[]
    ceil = 0
    catprods= product.objects.values('tags', 'id')
    cats= {item["category"] for item in catprods}
    for cat in cats:
        prod=product.objects.filter(category=cat)
        n = len(prod)
        nSlides = n // 4 + ceil((n / 4) - (n // 4))
        allProds.append([prod, range(1, nSlides), nSlides])

    params={'allProds':allProds }
    return render(request,"shop/index.html", params)