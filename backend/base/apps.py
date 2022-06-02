from django.apps import AppConfig


class BaseConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'base'

#methode ready qui va permettre à l'app d'importer le signal
    def ready(self):
        import base.signals
