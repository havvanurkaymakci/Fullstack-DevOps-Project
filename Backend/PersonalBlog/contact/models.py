from django.db import models


class Contact(models.Model):
    """ Model for storing contact form submissions """
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    #subject = models.CharField(max_length=200)
    message = models.TextField()
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.full_name} - {self.message}"
