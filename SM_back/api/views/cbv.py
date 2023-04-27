from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, viewsets
from api.models import Category, Exercise, Favorite
from api.serializers import CategorySerializer,ExerciseSerializer
from api.serializers.favorite import FavoriteSerializer
from rest_framework.permissions import IsAuthenticated


class ExerciseDetailsAPIView(APIView):
    def get_object(self, exercise_id):
        try:
            return Exercise.objects.get(pk=exercise_id)
        except Exercise.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, exercise_id):
        instance = self.get_object(exercise_id)
        serializer = ExerciseSerializer(instance)
        return Response(serializer.data)

    def put(self, request, exercise_id):
        instance = self.get_object(exercise_id)
        serializer = ExerciseSerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, exercise_id):
        instance = self.get_object(exercise_id)
        instance.delete()
        return Response({'deleted': True})


class CategoryListAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryDetailAPIView(APIView):
    def get_object(self, category_id):
        try:
            return Category.objects.get(pk=category_id)
        except Category.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, category_id):
        instance = self.get_object(category_id)
        serializer = CategorySerializer(instance)
        return Response(serializer.data)

    def put(self, request, category_id):
        instance = self.get_object(category_id)
        serializer = CategorySerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, category_id):
        instance = self.get_object(category_id)
        instance.delete()
        return Response({'deleted': True})