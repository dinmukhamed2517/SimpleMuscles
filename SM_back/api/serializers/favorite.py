from rest_framework import serializers

from api.models import Favorite, Exercise
from api.serializers import ExerciseSerializer


class FavoriteSerializer(serializers.ModelSerializer):
    exercises = ExerciseSerializer(many=True)
    class Meta:
        model = Favorite
        fields = '__all__'
