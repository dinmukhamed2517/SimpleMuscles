from django.db import models
from api.models.category import Category


class Exercise(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField()
    url = models.CharField(max_length=255)
