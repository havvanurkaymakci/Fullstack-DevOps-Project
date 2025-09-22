from django.db import models
# from django.contrib.auth.models import User

class Project(models.Model):
    """Portföy projesi modeli"""
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    category = models.CharField(max_length=100)
    client = models.CharField(max_length=255)
    completion_date = models.DateField()
    link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title


class Service(models.Model):
    """Servis modeli"""
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title
    

class Testimonial(models.Model):
    """Musteri yorumlari modeli"""
    name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    content = models.TextField()
    image = models.ImageField(upload_to='testimonials/')
    rating = models.IntegerField(default=5)

    def __str__(self):
        return self.name
    


