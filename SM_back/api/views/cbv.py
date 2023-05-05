from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, viewsets
from api.models import Category, Exercise, Favorite
from api.serializers import CategorySerializer,ExerciseSerializer
from api.serializers.favorite import FavoriteSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics


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


class CategoryDetailsAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'
    queryset = Category.objects.all()


class ExerciseDetailsAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ExerciseSerializer
    lookup_url_kwarg = "exercise_id"
    queryset = Exercise.objects.all();

    # def put(self, request, *args, **kwargs):
    #     kwargs['partial'] = True
    #     return self.update(request, *args, **kwargs)


# class UpdateFavoriteExerciseAPIView(generics.UpdateAPIView):
#     serializer_class = ExerciseSerializer
#     queryset = Exercise.objects.all()
#
#     def update(self, request, *args, **kwargs):
#         instance = self.get_object()
#         favorite = Favorite.objects.get(user=request.user)
#         favorite.exercises.remove(instance)
#         serializer = self.get_serializer(instance, data=request.data, partial=True)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         favorite.exercises.add(instance)
#
#         return Response(serializer.data)