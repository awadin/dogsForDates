from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from dogsForDates import views

from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'dogData', views.dogDataView, 'dogData')
router.register(r'cartData', views.cartDataView, 'cartData')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
] + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
