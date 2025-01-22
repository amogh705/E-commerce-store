from django.db import models

class Product(models.Model):
    name=model.CharField(max_length=100)
    description=models.TextField()
    price=models.decimalField(max_digits=10,decimal_places=2)

    def __str__(self):
        return self.name
