from rest_framework import serializers
from api.models import Category


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    url = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(**validated_data)
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance
