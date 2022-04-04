from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(Produit)
admin.site.register(Reaction)
admin.site.register(Commande)
admin.site.register(ItemCommande)
admin.site.register(AdresseLivraison)

