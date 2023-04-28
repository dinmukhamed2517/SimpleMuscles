from rest_framework import serializers

from api.models import Favorite, Exercise
from api.serializers import ExerciseSerializer, UserSerializer


class FavoriteSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    exercises = ExerciseSerializer(many=True)
    class Meta:
        model = Favorite
        fields = '__all__'
