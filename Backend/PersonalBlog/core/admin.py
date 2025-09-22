from django.contrib import admin
from .models import Project, Service, Testimonial


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'client', 'completion_date')
    list_filter = ('category', 'completion_date')
    search_fields = ('title', 'description', 'client')
    date_hierarchy = 'completion_date'


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title',)
    search_fields = ('title', 'description')


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'position', 'rating')
    list_filter = ('rating',)
    search_fields = ('name', 'position', 'content')