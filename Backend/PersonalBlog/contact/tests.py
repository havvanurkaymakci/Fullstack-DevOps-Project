from django.test import TestCase
from .models import Contact

class ContactModelTests(TestCase):
    """Contact modeli için test sınıfı"""
    
    def setUp(self):
        """Test öncesi iletişim formu örneği oluştur"""
        self.contact = Contact.objects.create(
            full_name='Mehmet Öztürk',
            email='mehmet@example.com',
            #subject='Hizmetleriniz Hakkında Bilgi',
            message='Projemiz için fiyat teklifi almak istiyorum.',
            is_read=False
        )
    
    def test_contact_creation(self):
        """İletişim formu doğru şekilde oluşturulmuş mu?"""
        self.assertTrue(isinstance(self.contact, Contact))
        self.assertEqual(self.contact.full_name, 'Mehmet Öztürk')
        self.assertEqual(self.contact.email, 'mehmet@example.com')
        #self.assertEqual(self.contact.subject, 'Hizmetleriniz Hakkında Bilgi')
        self.assertEqual(self.contact.message, 'Projemiz için fiyat teklifi almak istiyorum.')
        self.assertEqual(self.contact.is_read, False)
    
    def test_contact_str_method(self):
        """__str__ metodu """
        expected_str = f"{self.contact.full_name} - {self.contact.message}"
        self.assertEqual(str(self.contact), expected_str)
    
    def test_contact_fields(self):
        """İletişim formu alanları doğru şekilde kaydediliyor mu?"""
        self.assertIsNotNone(self.contact.full_name)
        self.assertIsNotNone(self.contact.email)
        #self.assertIsNotNone(self.contact.subject)
        self.assertIsNotNone(self.contact.message)
        self.assertIsNotNone(self.contact.is_read)
    
    def test_mark_as_read(self):
        """Okundu olarak işaretleme işlevi doğru çalışıyor mu?"""
        self.assertFalse(self.contact.is_read)
        
        self.contact.is_read = True
        self.contact.save()
        
        self.assertTrue(self.contact.is_read)
        
        refreshed_contact = Contact.objects.get(id=self.contact.id)
        self.assertTrue(refreshed_contact.is_read)
    
    def test_email_field_validation(self):
        """Email alanı validasyonu doğru çalışıyor mu?"""
        self.assertEqual(self.contact.email, 'mehmet@example.com')
        
        self.assertIn('@', self.contact.email)