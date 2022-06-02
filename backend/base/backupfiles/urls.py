'''from django.urls import path
from . import views





urlpatterns = [
#url pour le login
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),

#url et routes pour les utilisateurs
    path('users/profile/', views.getUserProfile, name="products"),
    path('users/', views.getUsers, name="users"),
    path('users/inscription/', views.registerUser, name='register'),

#url et routes pour les produits
    #path('', views.getRoutes, name="routes"),
    path('products/', views.getProducts, name="products"),
    path('products/<str:pk>', views.getProduct, name="product"),
]
'''