from django.db.models.signals import pre_save
from django.contrib.auth.models import User

#signal qui va permettre d'mettre une confirmation lors de la creation d'un utilisateur.
#on renvoie l'email de l'utilisateur comme nom d'utilisateur et override name.
def updateUser(sender, instance, **kwargs):
    user = instance
    if user.email != '':
        user.username = user.email


pre_save.connect(updateUser, sender=User)