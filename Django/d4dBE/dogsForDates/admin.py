from django.contrib import admin
from .models import dogData, cartData

class dogDataAdmin(admin.ModelAdmin):
    list_display = ('id', 'image', 'title', 'description')

class cartDataAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description')

admin.site.register(dogData, dogDataAdmin)
admin.site.register(cartData, cartDataAdmin)