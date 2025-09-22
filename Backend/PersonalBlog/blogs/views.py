from rest_framework import viewsets, permissions, filters, generics, status
from rest_framework.response import Response
from django.db.models import F
from django.utils import timezone
from django_filters.rest_framework import DjangoFilterBackend

from .models import Category, Tag, Post, Comment
from .serializers import (
    CategorySerializer, 
    TagSerializer, 
    PostListSerializer,
    PostDetailSerializer,
    CommentSerializer
)

class IsAuthorOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author == request.user


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet for viewing categories"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'


class TagViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet for viewing tags"""
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    lookup_field = 'slug'

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.filter(is_published=True)
    permission_classes = [IsAuthorOrReadOnly]
    lookup_field = 'slug'
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category__slug', 'tags__slug', 'author__username']
    search_fields = ['title', 'content']
    
    def get_serializer_class(self):
        if self.action == 'list':
            return PostListSerializer
        return PostDetailSerializer
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class CommentCreateAPIView(generics.CreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['post_id'] = self.kwargs['post_id']
        return context

class CommentListAPIView(generics.ListAPIView):
    serializer_class = CommentSerializer
    permission_classes = [permissions.AllowAny]
    
    def get_queryset(self):
        post_id = self.kwargs['post_id']
        return Comment.objects.filter(post_id=post_id, is_approved=True)
