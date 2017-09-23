from django.db import models
from django.utils import timezone

# Create your models here.

class StorageRequirement(models.Model):
    name =  models.CharField(max_length=50)
    details = models.CharField(max_length=500)

    def __str__(self):
        return self.name

class Item(models.Model):
    name =  models.CharField(max_length=50)
    storage_requirement = models.ForeignKey(StorageRequirement)
    quantity = models.CharField(max_length=50)
    def __str__(self):
        return "%s (%s)" % (self.name, self.quantity)


class Donation(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=50)
    create_time = models.DateTimeField(auto_now_add=True)
    modify_time = models.DateTimeField(auto_now=True)
    deadline = models.DateTimeField(default=timezone.now)
    items = models.ManyToManyField(Item, verbose_name="list of items in this donation")
    def __str__(self):
        return self.title

    

