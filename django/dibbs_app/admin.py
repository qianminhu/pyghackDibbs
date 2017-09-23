from django.contrib import admin

from .models import *

admin.site.register(Donation)
admin.site.register(Item)
admin.site.register(StorageRequirement)
admin.site.register(DonationStatus)
admin.site.register(DonationStatusLog)
admin.site.register(Organization)
admin.site.register(Location)


# Register your models here.
