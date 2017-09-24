from django.contrib.auth.models import User, Group
from dibbs_app.models import *
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('name', 'address', 'addresss2', 'city', 'state', 'zipcode', 'nodes')

class OrganizationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Organization
        fields = ('name','tax_id', 'locations')

class StorageRequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = StorageRequirement
        fields = ('name', 'details')

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        storage_requirement = StorageRequirementSerializer()
        fields = ('name', 'quantity', 'storage_requirement')

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        items = ItemSerializer(many=True, read_only=True)
        location = LocationSerializer()
        fields = ('title', 'description', 'create_time', 'modify_time', 'deadline', 'cost_estimate', 'items', 'location')
        depth = 1

class DonationStatusLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonationStatusLog
        donation = DonationSerializer()
        recipient = OrganizationSerializer()
        fields = ('donation', 'status', 'status_time', 'recipient')
