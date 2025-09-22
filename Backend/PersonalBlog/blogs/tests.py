from django.test import TestCase
from django.contrib.auth.models import User
from django.utils import timezone
from django.utils.text import slugify
from .models import Category, Tag, Post, Comment
import datetime

class CategoryModelTests(TestCase):
    """Category modeli için test sınıfı"""
    
    def setUp(self):
        """Test öncesi kategori örneği oluştur"""
        self.category = Category.objects.create(
            name='Teknoloji',
            description='Teknoloji ile ilgili blog yazıları',
        )
    
    def test_category_creation(self):
        """Kategori doğru şekilde oluşturulmuş mu?"""
        self.assertTrue(isinstance(self.category, Category))
        self.assertEqual(self.category.name, 'Teknoloji')
        self.assertEqual(self.category.description, 'Teknoloji ile ilgili blog yazıları')
        # slug otomatik oluşturulmalı
        self.assertEqual(self.category.slug, 'teknoloji')
    
    def test_category_str_method(self):
        """__str__ metodu doğru çalışıyor mu?"""
        self.assertEqual(str(self.category), 'Teknoloji')
    
    def test_category_slug_generation(self):
        """Slug otomatik oluşturuluyor mu?"""
        category = Category.objects.create(
            name='Web Geliştirme',
            description='Web geliştirme hakkında yazılar',
        )
        self.assertEqual(category.slug, 'web-gelistirme')
    
    def test_category_custom_slug(self):
        """Özel slug kullanılabiliyor mu?"""
        category = Category.objects.create(
            name='Mobil Uygulama',
            description='Mobil uygulama geliştirme yazıları',
            slug='mobile-apps'
        )
        self.assertEqual(category.slug, 'mobile-apps')
    
    def test_category_ordering(self):
        """Kategoriler isimlerine göre sıralanıyor mu?"""
        Category.objects.create(name='Android')
        Category.objects.create(name='iOS')
        Category.objects.create(name='Python')
        
        categories = Category.objects.all()
        self.assertEqual(categories[0].name, 'Android')
        self.assertEqual(categories[1].name, 'iOS')
        self.assertEqual(categories[2].name, 'Python')
        self.assertEqual(categories[3].name, 'Teknoloji')


class TagModelTests(TestCase):
    """Tag modeli için test sınıfı"""
    
    def setUp(self):
        """Test öncesi etiket örneği oluştur"""
        self.tag = Tag.objects.create(
            name='Django',
        )
    
    def test_tag_creation(self):
        """Etiket doğru şekilde oluşturulmuş mu?"""
        self.assertTrue(isinstance(self.tag, Tag))
        self.assertEqual(self.tag.name, 'Django')
        # slug otomatik oluşturulmalı
        self.assertEqual(self.tag.slug, 'django')
    
    def test_tag_str_method(self):
        """__str__ metodu doğru çalışıyor mu?"""
        self.assertEqual(str(self.tag), 'Django')
    
    def test_tag_slug_generation(self):
        """Slug otomatik oluşturuluyor mu?"""
        tag = Tag.objects.create(
            name='Python Programming',
        )
        self.assertEqual(tag.slug, 'python-programming')
    
    def test_tag_custom_slug(self):
        """Özel slug kullanılabiliyor mu?"""
        tag = Tag.objects.create(
            name='JavaScript',
            slug='js'
        )
        self.assertEqual(tag.slug, 'js')
    
    def test_tag_ordering(self):
        """Etiketler isimlerine göre sıralanıyor mu?"""
        Tag.objects.create(name='CSS')
        Tag.objects.create(name='HTML')
        Tag.objects.create(name='Python')
        
        tags = Tag.objects.all()
        self.assertEqual(tags[0].name, 'CSS')
        self.assertEqual(tags[1].name, 'Django')
        self.assertEqual(tags[2].name, 'HTML')
        self.assertEqual(tags[3].name, 'Python')


class PostModelTests(TestCase):
    """Post modeli için test sınıfı"""
    
    def setUp(self):
        """Test öncesi gerekli nesneleri oluştur"""
        # Kullanıcı oluştur
        self.user = User.objects.create_user(
            username='testuser',
            email='testuser@example.com',
            password='testpassword'
        )
        
        # Kategori oluştur
        self.category = Category.objects.create(
            name='Programlama',
            description='Programlama ile ilgili blog yazıları',
        )
        
        # Etiketler oluştur
        self.tag1 = Tag.objects.create(name='Python')
        self.tag2 = Tag.objects.create(name='Django')
        
        # Post oluştur
        self.post = Post.objects.create(
            title='Django ile Web Geliştirme',
            content='Django, Python tabanlı bir web framework\'tür. Bu yazıda Django ile web geliştirme hakkında temel bilgileri paylaşacağım.',
            author=self.user,
            category=self.category,
            is_published=True
        )
        
        # Etiketleri post'a ekle
        self.post.tags.add(self.tag1, self.tag2)
    
    # Burada hata var...
    def test_post_creation(self):
        """Post doğru şekilde oluşturulmuş mu?"""
        self.assertTrue(isinstance(self.post, Post))
        self.assertEqual(self.post.title, 'Django ile Web Geliştirme')
        self.assertTrue(self.post.content.startswith('Django, Python tabanlı'))
        self.assertEqual(self.post.author, self.user)
        self.assertEqual(self.post.category, self.category)
        self.assertTrue(self.post.is_published)
        
        # Slug otomatik oluşturulmalı
        self.assertEqual(self.post.slug, 'django-ile-web-gelistirme')
        
        # Özet otomatik oluşturulmalı
        self.assertTrue(self.post.excerpt.startswith('Django, Python tabanlı'))
        self.assertTrue(self.post.excerpt.endswith('m.'))
    
    def test_post_str_method(self):
        """__str__ metodu doğru çalışıyor mu?"""
        self.assertEqual(str(self.post), 'Django ile Web Geliştirme')
    
    def test_post_tags_relation(self):
        """Post-Tag ilişkisi doğru çalışıyor mu?"""
        self.assertEqual(self.post.tags.count(), 2)
        self.assertIn(self.tag1, self.post.tags.all())
        self.assertIn(self.tag2, self.post.tags.all())
    
    def test_post_custom_slug(self):
        """Özel slug kullanılabiliyor mu?"""
        post = Post.objects.create(
            title='Python Programlama Temelleri',
            slug='python-basics',
            content='Python programlama diline giriş yapacağız.',
            author=self.user,
            category=self.category
        )
        self.assertEqual(post.slug, 'python-basics')
    
    def test_post_custom_excerpt(self):
        """Özel özet kullanılabiliyor mu?"""
        post = Post.objects.create(
            title='React Temelleri',
            content='React ile frontend geliştirme.',
            excerpt='React öğrenmek için başlangıç kılavuzu.',
            author=self.user,
            category=self.category
        )
        self.assertEqual(post.excerpt, 'React öğrenmek için başlangıç kılavuzu.')
    
    def test_post_ordering(self):
        """Postlar yayınlanma tarihine göre sıralanıyor mu?"""
        # Daha eski tarihli post oluştur
        old_date = timezone.now() - datetime.timedelta(days=10)
        old_post = Post.objects.create(
            title='Eski Post',
            content='Bu eski bir post.',
            author=self.user,
            published_at=old_date
        )
        
        # Daha yeni tarihli post oluştur
        new_date = timezone.now() + datetime.timedelta(days=1)
        new_post = Post.objects.create(
            title='Yeni Post',
            content='Bu yeni bir post.',
            author=self.user,
            published_at=new_date
        )
        
        posts = Post.objects.all()
        self.assertEqual(posts[0], new_post)  # En yeni post ilk sırada
        self.assertEqual(posts[1], self.post)  # Ortadaki post
        self.assertEqual(posts[2], old_post)  # En eski post son sırada


class CommentModelTests(TestCase):
    """Comment modeli için test sınıfı"""
    
    def setUp(self):
        """Test öncesi gerekli nesneleri oluştur"""
        # Kullanıcılar oluştur
        self.author = User.objects.create_user(
            username='author',
            email='author@example.com',
            password='authorpass'
        )
        
        self.user = User.objects.create_user(
            username='commentuser',
            email='commentuser@example.com',
            password='userpass'
        )
        
        # Post oluştur
        self.post = Post.objects.create(
            title='Test Post',
            content='Bu bir test postudur.',
            author=self.author
        )
        
        # Yorum oluştur
        self.comment = Comment.objects.create(
            post=self.post,
            user=self.user,
            content='Harika bir yazı olmuş, teşekkürler!',
            is_approved=True
        )
    
    def test_comment_creation(self):
        """Yorum doğru şekilde oluşturulmuş mu?"""
        self.assertTrue(isinstance(self.comment, Comment))
        self.assertEqual(self.comment.post, self.post)
        self.assertEqual(self.comment.user, self.user)
        self.assertEqual(self.comment.content, 'Harika bir yazı olmuş, teşekkürler!')
        self.assertTrue(self.comment.is_approved)
    
    def test_comment_str_method(self):
        """__str__ metodu doğru çalışıyor mu?"""
        expected_str = f'Comment by {self.user.username} on {self.post.title}'
        self.assertEqual(str(self.comment), expected_str)
    
    def test_comment_post_relation(self):
        """Comment-Post ilişkisi doğru çalışıyor mu?"""
        # Post'un yorumlarını kontrol et
        self.assertEqual(self.post.comments.count(), 1)
        self.assertEqual(self.post.comments.first(), self.comment)
    
    def test_comment_user_relation(self):
        """Comment-User ilişkisi doğru çalışıyor mu?"""
        # Kullanıcının yorumlarını kontrol et
        self.assertEqual(self.user.comments.count(), 1)
        self.assertEqual(self.user.comments.first(), self.comment)
    
    def test_comment_ordering(self):
        """Yorumlar oluşturulma tarihine göre sıralanıyor mu?"""
        # Daha yeni bir yorum oluştur
        new_comment = Comment.objects.create(
            post=self.post,
            user=self.user,
            content='İkinci yorumum',
            is_approved=True
        )
        
        comments = Comment.objects.all()
        self.assertEqual(comments[0], new_comment)  # En yeni yorum ilk sırada
        self.assertEqual(comments[1], self.comment)  # Eski yorum ikinci sırada
    
    def test_comment_approval(self):
        """Yorum onaylama özelliği doğru çalışıyor mu?"""
        # Onaylanmamış yorum oluştur
        unapproved_comment = Comment.objects.create(
            post=self.post,
            user=self.user,
            content='Bu yorum onay bekliyor.',
            is_approved=False
        )
        
        self.assertFalse(unapproved_comment.is_approved)
        
        # Yorumu onayla
        unapproved_comment.is_approved = True
        unapproved_comment.save()
        
        # Veritabanından tekrar yükleyerek kontrol et
        refreshed_comment = Comment.objects.get(id=unapproved_comment.id)
        self.assertTrue(refreshed_comment.is_approved)