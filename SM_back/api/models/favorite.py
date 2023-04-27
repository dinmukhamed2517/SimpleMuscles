from django.db import models
from api.models.exercise import Exercise
from django.contrib.auth import get_user_model

User = get_user_model()


class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    exercises = models.ManyToManyField(Exercise)



