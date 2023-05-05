from rest_framework_jwt.views import obtain_jwt_token
from django.urls import path
from api import views
urlpatterns = [
    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>', views.CategoryDetailsAPIView.as_view()),
    path('categories/<int:category_id>/exercises', views.exercise_by_category),
    path('exercises/', views.exercise_list),
    path('exercises/<int:exercise_id>', views.ExerciseDetailsAPIView.as_view()),
    path('login/', obtain_jwt_token),
    path('user_id/', views.get_user_id),
    path('favorites/<int:user_id>', views.favorite),
    path('add-to-favorite/<int:exercise_id>/', views.add_to_favorites),
    path('remove-from-favorite/<int:exercise_id>/', views.remove_from_favorites),
    # path('update-favorite-exercise/')
]
