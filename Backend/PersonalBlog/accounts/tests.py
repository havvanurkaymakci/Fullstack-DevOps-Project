from django.test import TestCase
from django.contrib.auth.models import User
from django.core.files.uploadedfile import SimpleUploadedFile
from .models import Profile
import tempfile


class UserModelTest(TestCase):
    """Default user model."""
    
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            email='test@example.com',
            password='testpassword123'
        )
    
    def test_user_creation(self):
        """User oluşturma işlemi"""
        self.assertEqual(self.user.username, 'testuser')
        self.assertEqual(self.user.email, 'test@example.com')
        self.assertTrue(self.user.check_password('testpassword123'))
    
    def test_user_string_representation(self):
        """__str__ metodu"""
        self.assertEqual(str(self.user), 'testuser')


class ProfileModelTest(TestCase):
    """Profile modeli"""
    
    def setUp(self):
        self.user = User.objects.create_user(
            username='profileuser',
            email='profile@example.com',
            password='profilepass123'
        )
        
        self.profile = Profile.objects.get(user=self.user)
    
    def test_profile_creation(self):
        """Profile nesnesi User oluşturulduğunda otomatik oluşturuldu mu"""
        self.assertEqual(Profile.objects.count(), 1)
        self.assertEqual(self.profile.user, self.user)
        self.assertEqual(self.profile.bio, '')
        self.assertEqual(self.profile.website, '')
    
    def test_profile_string_representation(self):
        """__str__ metodu """
        expected_string = f'{self.user.username} Profile'
        self.assertEqual(str(self.profile), expected_string)
    
    def test_profile_update(self):
        """Profile güncelleme"""
        self.profile.bio = 'Test bio metni'
        self.profile.website = 'https://example.com'
        self.profile.save()
        
        updated_profile = Profile.objects.get(user=self.user)
        self.assertEqual(updated_profile.bio, 'Test bio metni')
        self.assertEqual(updated_profile.website, 'https://example.com')


class ProfileImageTest(TestCase):
    """Profile resmi yükleme testi"""
    
    def setUp(self):
        self.user = User.objects.create_user(
            username='imageuser',
            email='image@example.com',
            password='imagepass123'
        )
        self.profile = Profile.objects.get(user=self.user)
    
    def test_profile_image_upload(self):
        """Profil resmi yüklenebiliyor mu"""
        with tempfile.NamedTemporaryFile(suffix='.jpg') as temp_image:
            temp_image.write(b'dummy image content')
            temp_image.seek(0)
    
            self.profile.profile_picture = SimpleUploadedFile(
                name='test_image.jpg',
                content=temp_image.read(),
                content_type='image/jpeg'
            )
            self.profile.save()
        
            updated_profile = Profile.objects.get(user=self.user)
            self.assertTrue(updated_profile.profile_picture.name.endswith('.jpg'))


class UserSignalTest(TestCase):
    """User sinyalleri için testler"""
    
    def test_profile_created_on_user_creation(self):
        """User oluşturulduğunda Profile otomatik oluşturulmalı"""
        user = User.objects.create_user(
            username='signaluser',
            email='signal@example.com',
            password='signalpass123'
        )
        
        self.assertTrue(hasattr(user, 'profile'))
        self.assertIsInstance(user.profile, Profile)
    
    def test_profile_updated_on_user_update(self):
        """User güncellendiğinde Profile da güncellenebilmeli"""
        user = User.objects.create_user(
            username='updateuser',
            email='update@example.com',
            password='updatepass123'
        )
        
        user.profile.bio = 'Güncellenmiş bio'
        
        user.save()
        
        updated_user = User.objects.get(username='updateuser')
        self.assertEqual(updated_user.profile.bio, 'Güncellenmiş bio')


class ProfileDeleteTest(TestCase):
    """Kullanıcı silindiğinde profile'ın da silinmesi testi"""
    
    def test_profile_deleted_with_user(self):
        """User silindiğinde Profile da silinmeli (CASCADE)"""
        user = User.objects.create_user(
            username='deleteuser',
            email='delete@example.com',
            password='deletepass123'
        )
        
        user_id = user.id
        
        self.assertEqual(Profile.objects.filter(user_id=user_id).count(), 1)

        user.delete()
        
        self.assertEqual(Profile.objects.filter(user_id=user_id).count(), 0)
