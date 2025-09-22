from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from . import api

router = DefaultRouter()
router.register(r'services', views.ServiceViewSet, basename='service')
router.register(r'projects', views.ProjectViewSet)
router.register(r'testimonials', views.TestimonialViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('services/<int:pk>/', api.service_detail, name='service-detail'),
    path('projects/<int:pk>/', api.project_detail, name='project-detail'),
    path('testimonials/<int:pk>/', api.testimonial_detail, name='testimonial-detail'),
]