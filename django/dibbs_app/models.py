from django.db import models
from django.utils import timezone


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

class Location(models.Model):
    name =  models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    address2 = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=2)
    zipcode = models.CharField(max_length=10)
    notes = models.TextField()
    def __str__(self):
        return self.name


class Organization(models.Model):
    name =  models.CharField(max_length=50)
    tax_id = models.CharField(max_length=10)
    locations = models.ManyToManyField(Location, verbose_name="locations")
    def __str__(self):
        return self.name



class Donation(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=50)
    create_time = models.DateTimeField(auto_now_add=True)
    modify_time = models.DateTimeField(auto_now=True)
    deadline = models.DateTimeField(default=timezone.now)
    items = models.ManyToManyField(Item, verbose_name="list of items in this donation")
    cost_estimate = models.DecimalField(decimal_places=2, max_digits=20)
    def __str__(self):
        return self.title

    
class DonationStatus(models.Model):
    status = models.CharField(max_length=50) 
    def __str__(self):
        return self.status

class DonationStatusLog(models.Model):
    donation =  models.ForeignKey(Donation)
    status   =  models.ForeignKey(DonationStatus)
    status_time = models.DateTimeField(auto_now=True)
    notes = models.TextField()
    def __str__(self):
        return "%s - %s" % (donation.title, status.status)
