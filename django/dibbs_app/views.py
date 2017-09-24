from rest_framework import viewsets, views
from dibbs_app.serializers import *
from rest_framework import permissions


class StorageRequirementViewSet(viewsets.ModelViewSet):
    queryset = StorageRequirement.objects.all()
    serializer_class = StorageRequirementSerializer
    permission_classes = (permissions.AllowAny,)


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = (permissions.AllowAny,)


class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    permission_classes = (permissions.AllowAny,)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny,)


class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    permission_classes = (permissions.AllowAny,)


class DonationsViewSet(viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
    permission_classes = (permissions.AllowAny,)


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = (permissions.AllowAny,)


class DonationStatusLogViewSet(viewsets.ModelViewSet):
    queryset = DonationStatusLog.objects.all()
    serializer_class = DonationStatusLogSerializer
    permission_classes = (permissions.AllowAny,)

