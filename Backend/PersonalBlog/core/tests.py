from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from django.utils import timezone
from .models import Project, Service, Testimonial
import datetime

class ProjectModelTests(TestCase):
    """Project modeli için test class"""
    
    def setUp(self):
        """Test öncesi proje örneği oluştur"""
        # Test için basit bir görsel dosyası oluştur
        test_image = SimpleUploadedFile(
            name='test_image.jpg',
            content=b'',  # Boş içerik, sadece test amaçlı
            content_type='image/jpeg'
        )
        
        self.project = Project.objects.create(
            title='Test Projesi',
            description='Bu bir test projesidir',
            image=test_image,
            category='Web Geliştirme',
            client='Test Müşteri',
            completion_date=timezone.now().date(),
            link='https://example.com'
        )
    
    def test_project_creation(self):
        """Proje doğru şekilde oluşturulmuş mu?"""
        self.assertTrue(isinstance(self.project, Project))
        self.assertEqual(self.project.title, 'Test Projesi')
        self.assertEqual(self.project.description, 'Bu bir test projesidir')
        self.assertEqual(self.project.category, 'Web Geliştirme')
        self.assertEqual(self.project.client, 'Test Müşteri')
        self.assertEqual(self.project.link, 'https://example.com')
    
    def test_project_str_method(self):
        """__str__ metodu """
        self.assertEqual(str(self.project), 'Test Projesi')
    
    def test_project_fields(self):
        """Proje alanları doğru şekilde kaydediliyor mu?"""
        self.assertIsNotNone(self.project.title)
        self.assertIsNotNone(self.project.description)
        self.assertIsNotNone(self.project.image)
        self.assertIsNotNone(self.project.category)
        self.assertIsNotNone(self.project.client)
        self.assertIsNotNone(self.project.completion_date)
        # Link opsiyonel olabilir, ama bu testte değer verdik
        self.assertIsNotNone(self.project.link)


class ServiceModelTests(TestCase):
    """Service modeli için test class"""
    
    def setUp(self):
        """Test öncesi servis örneği oluştur"""
        self.service = Service.objects.create(
            title='Web Tasarım',
            description='Modern ve duyarlı web tasarım hizmetleri'
        )
    
    def test_service_creation(self):
        """Servis doğru şekilde oluşturulmuş mu?"""
        self.assertTrue(isinstance(self.service, Service))
        self.assertEqual(self.service.title, 'Web Tasarım')
        self.assertEqual(self.service.description, 'Modern ve duyarlı web tasarım hizmetleri')
    
    def test_service_str_method(self):
        """__str__ metodu """
        self.assertEqual(str(self.service), 'Web Tasarım')
    
    def test_service_fields(self):
        """Servis alanları doğru şekilde kaydediliyor mu?"""
        self.assertIsNotNone(self.service.title)
        self.assertIsNotNone(self.service.description)


class TestimonialModelTests(TestCase):
    """Testimonial modeli için test class"""
    
    def setUp(self):
        """Test öncesi müşteri yorumu örneği oluştur"""
        # Test için basit bir görsel dosyası oluştur
        test_image = SimpleUploadedFile(
            name='test_avatar.jpg',
            content=b'',  # Boş içerik, sadece test amaçlı
            content_type='image/jpeg'
        )
        
        self.testimonial = Testimonial.objects.create(
            name='Ahmet Yılmaz',
            position='Genel Müdür',
            content='Harika bir iş çıkardılar, çok memnun kaldım.',
            image=test_image,
            rating=5
        )
    
    def test_testimonial_creation(self):
        """Müşteri yorumu doğru şekilde oluşturulmuş mu?"""
        self.assertTrue(isinstance(self.testimonial, Testimonial))
        self.assertEqual(self.testimonial.name, 'Ahmet Yılmaz')
        self.assertEqual(self.testimonial.position, 'Genel Müdür')
        self.assertEqual(self.testimonial.content, 'Harika bir iş çıkardılar, çok memnun kaldım.')
        self.assertEqual(self.testimonial.rating, 5)
    
    def test_testimonial_str_method(self):
        """__str__ metodu """
        self.assertEqual(str(self.testimonial), 'Ahmet Yılmaz')
    
    def test_testimonial_fields(self):
        """Müşteri yorumu alanları doğru şekilde kaydediliyor mu?"""
        self.assertIsNotNone(self.testimonial.name)
        self.assertIsNotNone(self.testimonial.position)
        self.assertIsNotNone(self.testimonial.content)
        self.assertIsNotNone(self.testimonial.image)
        self.assertIsNotNone(self.testimonial.rating)
    
    def test_testimonial_rating_range(self):
        """Farklı değerlendirme puanlarını test et"""
        # Geçerli bir puan değeriyle test
        self.testimonial.rating = 4
        self.testimonial.save()
        self.assertEqual(self.testimonial.rating, 4)
        
        # Minimum değerle test (eğer model seviyesinde bir kısıtlama yoksa)
        self.testimonial.rating = 1
        self.testimonial.save()
        self.assertEqual(self.testimonial.rating, 1)