from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from api.models import Exercise, Category, Favorite
from api.serializers import ExerciseSerializer, category, CategorySerializer
from api.serializers.favorite import FavoriteSerializer


@api_view(["GET"])
def category_list(request):
    if request.method == "GET":
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


def exercise_by_category_id(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
    exercises = Exercise.objects.all().filter(category=category)
    serializer = ExerciseSerializer(exercises, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_favorite(request):
    user = request.user
    try:
        favorite = Favorite.objects.get(user=user)
        serializer = FavoriteSerializer(favorite, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Favorite.DoesNotExist:
        serializer = FavoriteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def exercise_by_category(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    if request.method == "GET":
        exercises = Exercise.objects.filter(category=category)
        serializer = ExerciseSerializer(exercises, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def exercise_list(request):
    if request.method == "GET":
        exercises = Exercise.objects.all()
        serializer = ExerciseSerializer(exercises, many=True)
        return Response(serializer.data)

@api_view(['GET'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def get_user_id(request):
    user_id = request.user.id
    return Response({'user_id': user_id})


@api_view(['DELETE','GET'])
def remove_from_favorites(request, exercise_id):
    user_id = request.user.id
    try:
        favorite = Favorite.objects.get(user_id=user_id)
        favorite.exercises.remove(exercise_id)
        favorite.save()
        return Response({'message': f'Exercise item {exercise_id} has been removed from favorites.'})
    except Favorite.DoesNotExist:
        return Response({'error': 'No favorite found for this user.'}, status=status.HTTP_404_NOT_FOUND)
    except ValueError:
        return Response({'error': 'The specified exercise ID is invalid.'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def favorite(request, user_id):
    if request.method == "GET":
        favorite = Favorite.objects.get(user_id = user_id)
        serializer = FavoriteSerializer(favorite)
        return Response(serializer.data)

@api_view(['POST'])
def add_to_favorites(request, exercise_id):
    user_id = request.user.id
    try:
        favorite = Favorite.objects.get(user_id=user_id)
        favorite.exercises.add(exercise_id)
        favorite.save()
        serializer = FavoriteSerializer(favorite)
        return Response(serializer.data)
    except Favorite.DoesNotExist:
        return Response({'error': 'No favorite found for this user.'}, status=status.HTTP_404_NOT_FOUND)
    except ValueError:
        return Response({'error': 'The specified exercise ID is invalid.'}, status=status.HTTP_400_BAD_REQUEST)