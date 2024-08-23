from django.shortcuts import render
from rest_framework import viewsets
from .serializers import cartDataSerializer, dogDataSerializer
from .models import cartData, dogData

class dogDataView(viewsets.ModelViewSet):
    serializer_class = dogDataSerializer
    queryset = dogData.objects.all()

class cartDataView(viewsets.ModelViewSet):
    serializer_class = cartDataSerializer
    queryset = cartData.objects.all()