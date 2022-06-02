from django.urls import path
from base.views import user_views as views





urlpatterns = [
#url pour le login
    path('login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),

#url et routes pour les utilisateurs
    path('profile/', views.getUserProfile, name="products"),
    path('', views.getUsers, name="users"),
    path('inscription/', views.registerUser, name='register'),
]