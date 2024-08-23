from rest_framework import serializers
from .models import dogData, cartData

class dogDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = dogData
        fields = ('id', 'image', 'title', 'description')

class cartDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = cartData
        fields = ('id', 'title', 'description')