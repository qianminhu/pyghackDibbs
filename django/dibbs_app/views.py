from django.contrib.auth.models import User, Group
from dibbs_app.models import Donation
from rest_framework import viewsets
from dibbs_app.serializers import UserSerializer, GroupSerializer, DonationSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class DonationsViewSet(viewsets.ModelViewSet):
     queryset = Donation.objects.all()
     serializer_class = DonationSerializer
