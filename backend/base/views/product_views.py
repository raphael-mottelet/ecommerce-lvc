from email.policy import HTTP
from itertools import product
from math import prod
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

#on recupere les produits avec plusieurs produits
@api_view(['GET'])
def getProducts (request):
    products = Produit.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

#vue renvoyant les produits à tout les utilisateurs
@api_view(['GET'])
def getProduct (request, pk):
    product = Produit.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request, pk):
    user = request.user
    product = prod.objects.get(_id=pk)
    data = request.data

    #Si la revue existe deja on renvoie une erreur avec le code 400
    alreadyExists = product.review_set.filter(user=user).exists()
    if alreadyExists:
        content = {'detail': 'Product already reviewed'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # pas de reactions ou 0
    elif data['rating'] == 0:
        content = {'detail': 'Please select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    #On creer notre  vue pour les reactions
    else:
        review = Reaction.objects.create(
            user=user,
            product=product,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )
# on calcule la note du produit en divisant le nombre d'étoiles par le nombre de revues
        reviews = product.review_set.all()
        product.numReviews = len(reviews)

        total = 0
        for i in reviews:
            total += i.rating

        product.rating = total / len(reviews)
        product.save()

        return Response('Reaction Ajoutée')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductFavorite(request, pk):
    user = request.user
    product = prod.objects.get(_id=pk)
    data = request.data

    alreadyExists = product.favorite_set.filter(user=user).exists()
    if alreadyExists:
        content = {'detail': 'Favoris déja ajouté'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
