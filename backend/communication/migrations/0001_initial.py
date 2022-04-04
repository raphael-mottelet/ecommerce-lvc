# Generated by Django 4.0.3 on 2022-04-01 13:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Carousel',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('titre', models.CharField(max_length=200, null=True)),
                ('description', models.TextField(null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('imagePromo', models.CharField(max_length=200, null=True)),
                ('categorie', models.CharField(max_length=200, null=True)),
                ('createdAt', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='PubliciteImage',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('titre', models.CharField(max_length=200, null=True)),
                ('description', models.TextField(null=True)),
                ('typePage', models.CharField(max_length=200, null=True)),
                ('emplacement', models.IntegerField(blank=True, default=0, null=True)),
                ('url', models.CharField(max_length=200, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('createdAt', models.DateTimeField()),
            ],
        ),
    ]
