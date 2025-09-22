from django.contrib import admin
from django.urls import path , include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("core.urls")),
    path('api/blog/',include("blogs.urls")),
    path('api/accounts/',include("accounts.urls")),
    path('contact/',include("contact.urls")),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)