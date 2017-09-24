from django.contrib.auth.models import User, Group
from dibbs_app.models import Donation
from rest_framework import viewsets
from dibbs_app.serializers import UserSerializer, GroupSerializer, DonationSerializer
from rest_framework import permissions

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAdminUser,)


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = (permissions.IsAdminUser,)


class DonationsViewSet(viewsets.ModelViewSet):
     queryset = Donation.objects.all()
     serializer_class = DonationSerializer
     permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

