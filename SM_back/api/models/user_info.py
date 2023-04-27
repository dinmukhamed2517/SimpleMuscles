from django.contrib.auth import get_user_model
from django.db import models
User = get_user_model()


class UserInfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=11)
    country = models.CharField(max_length=40)
    city = models.CharField(max_length=40)
    address = models.CharField(max_length=40)


