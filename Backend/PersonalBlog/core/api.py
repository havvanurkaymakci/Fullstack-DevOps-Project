from django.shortcuts import render, get_object_or_404
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import Service, Project, Testimonial

from .serializers import (
    ServiceSerializer, ProjectSerializer, TestimonialSerializer
)


# Service views
@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def service_list(request):
    services = Service.objects.all()
    serializer = ServiceSerializer(services, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def service_detail(request, pk):
    service = get_object_or_404(Service, pk=pk)
    serializer = ServiceSerializer(service)
    return Response(serializer.data)


# Project views
@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def project_list(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def project_detail(request, pk):
    project = get_object_or_404(Project, pk=pk)
    serializer = ProjectSerializer(project)
    return Response(serializer.data)


# Testimonial views
@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def testimonial_list(request):
    testimonials = Testimonial.objects.all()
    serializer = TestimonialSerializer(testimonials, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def testimonial_detail(request, pk):
    testimonial = get_object_or_404(Testimonial, pk=pk)
    serializer = TestimonialSerializer(testimonial)
    return Response(serializer.data)
