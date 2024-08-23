from django.db import models

class dogData(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='images/', default='missingImage.jpg')
    title = models.CharField(max_length=50, default="Dog")
    description = models.TextField()

    def _str_(self):
        return self.title
    
class cartData(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50, default="Dog")
    description = models.TextField()

    def _str_(self):
        return self.title
