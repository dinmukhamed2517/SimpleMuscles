from django.contrib import admin

from api.models import Category,Exercise, Favorite


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


@admin.register(Exercise)
class ExerciseAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


admin.site.register(Favorite)
