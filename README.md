Bu proje, 4 kişilik bir ekip tarafından bir dönem ödevi kapsamında geliştirilmiştir. Ekipte rol dağılımı şu şekilde yapılmıştır:

 Proje Yöneticisi: Proje planlama, görev dağılımı, CI/CD süreçlerinin yönetimi

 Frontend Developer (Benim Rolüm): Next.js & TypeScript tabanlı kullanıcı arayüzünün tasarımı ve geliştirilmesi

 Backend Developer: Django REST API geliştirme ve SQL Server entegrasyonu

 Tester: Selenium tabanlı otomatik test senaryoları

Projenin amacı, DevOps süreçlerini uçtan uca uygulamalı olarak göstermek; yani planlama, geliştirme, test, dağıtım ve sürdürme adımlarını gerçekçi bir senaryo üzerinden deneyimlemektir.

 Öne Çıkan Özellikler

Azure DevOps altyapısı kullanılarak CI/CD pipeline oluşturuldu

Docker Compose ile tüm servisler konteynerize edilerek kolay kurulabilir ve taşınabilir hale getirildi

Next.js (TypeScript) ile modern, modüler ve yeniden kullanılabilir frontend arayüzü geliştirildi

Django REST Framework + JWT ile güvenli backend servisleri sağlandı

SQL Server ile ilişkisel veritabanı yönetimi gerçekleştirildi

Selenium ile kullanıcı arayüzü testleri otomatikleştirildi, böylece manuel test yükü azaltıldı

 Frontend (Benim Katkım)

Next.js & TypeScript ile SEO uyumlu, performanslı ve modüler arayüz geliştirildi

Component-based architecture ile yeniden kullanılabilir bileşenler oluşturuldu

Backend API’leriyle entegrasyon sağlanarak dinamik veri gösterimi gerçekleştirildi

Docker kullanılarak bağımsız şekilde çalışabilen frontend servisi kuruldu

 Backend

Django & Django REST Framework kullanılarak API katmanı geliştirildi

JWT Authentication ile kullanıcı doğrulama ve yetkilendirme mekanizması kuruldu

SQL Server ile güvenilir veri saklama ve yönetim sağlandı

Docker Compose aracılığıyla backend servisleri izole edilip yönetilebilir hale getirildi

 Test Otomasyonu

Selenium ile kullanıcı senaryoları (login, form doldurma, veri ekleme) otomatik test edildi

Python unittest framework ile test süreçleri düzenlendi

Azure DevOps pipeline içerisine entegre edilerek testler otomatik çalıştırıldı

 Kullanılan Teknolojiler

Frontend: Next.js, TypeScript, CSS

Backend: Django, Django REST Framework, JWT

Database: SQL Server

Test: Selenium, Python Unittest

DevOps: Docker, Docker Compose, Azure DevOps

 Kurulum

Projeyi klonlayın:

git clone https://github.com/havvanurkaymakci/Devops.git
cd Devops


Docker Compose ile servisleri başlatın:

docker-compose up --build


Testler

Testleri çalıştırmak için:

python -m unittest discover tests



Bu proje ile:

DevOps kültürünün temel prensipleri uygulamalı olarak öğrenildi

Ekip içi rol paylaşımı ile işbirliği ve görev yönetimi deneyimi kazanıldı

CI/CD, konteynerleşme ve otomatik test gibi modern yazılım geliştirme pratikleri gerçek bir senaryo üzerinde uygulandı
