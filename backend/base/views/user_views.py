from email.policy import HTTP
from itertools import product
from math import prod
from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
#on importe ci dessous du code permettant de créer des restrictions en fonction du type d'utilisateur et si l'utilisateur est connecté ou non
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

#from .models import Produit
from django.contrib.auth.models import User
from base.serializers import ProductSerializer, UserSerializers, UserSerializerWithToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
#on importe une fonction qui va permettre de hash le mot de passe des utilisateurs
from django.contrib.auth.hashers import make_password
#on importe status pour les messages d'erreur
from  rest_framework import status

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

#on set le serializer avec token, on passe self.user puis on boucle a travers tout les item de l'utilisateur (mail, username, email, etc...)
        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

#items écris en dur, sans boucles
        #data['username'] = self.user.username
        #data['email'] = self.user.email

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
'''
#on crée les routes
@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/products/',
        'api/products/create/',

        'api/products/upload/',

        'api/products/<id>/reviews/',

        'api/products/top/',
        'api/products/<id>/',

        'api/products/delete/<id>/',
        'api/products/<update>/<id>/',
    ]
    return Response(routes)
    '''
#la vue ne prend que les requetes POST
@api_view(['POST'])
def registerUser(request):
    data = request.data
    #print('DATA:', data)
#dictionnaire de donnée pour l'utilisateur lors de l'inscription
    try:
        user = User.objects.create (
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )
        
    #on creer ce serializer pour renvoyer directement un serializer, on renvoie qu'un seul objet avec False
        serializer = UserSerializerWithToken(user, many=False)

        return Response(serializer.data)
        #exception avec retour d'erreur dans le cas ou l'email existe deja
    except:
        message = {'details':'Email déja utilisé'}
        return Response(message, status= status.HTTP_400_BAD_REQUEST)

#on recupere user et un seul user
@api_view(['GET'])
#si l'on a pas le token, l'on obtient pas les données de l'utilisateur (@permission_classes)
@permission_classes([IsAuthenticated])
def getUserProfile (request):
    user = request.user
    serializer = UserSerializers(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
#on ajoute la permission ou seul l'admin peut voir la vue concernant la liste des utilisateurs
@permission_classes([IsAdminUser])
def getUsers (request):
    users = User.objects.all()
    serializer = UserSerializers(users, many=True)
    return Response(serializer.data)