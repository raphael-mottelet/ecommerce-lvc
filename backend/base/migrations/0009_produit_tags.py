# Generated by Django 4.0.2 on 2022-06-02 12:09

from django.db import migrations
import taggit.managers


class Migration(migrations.Migration):

    dependencies = [
        ('taggit', '0005_auto_20220424_2025'),
        ('base', '0008_remove_produit_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='produit',
            name='tags',
            field=taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags'),
        ),
    ]
