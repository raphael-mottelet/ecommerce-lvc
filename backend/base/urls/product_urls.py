from django.urls import path
from base.views import product_views as views





urlpatterns = [

#on peut virer les noms d'url car ils sont spécifiés dans le fichier root urls (fichier "backend")
#url et routes pour les produits
    #path('', views.getRoutes, name="routes"),
    path('', views.getProducts, name="products"),
    #on passe juste l'id produit pour obtenir un seul produit
    
    path('<str:pk>/reviews', views.getProduct, name="create-review"),

    path('<str:pk>', views.getProduct, name="product"),
]