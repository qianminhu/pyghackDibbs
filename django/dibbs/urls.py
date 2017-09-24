from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers
from dibbs_app import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

router.register(r'storagerequirements', views.StorageRequirementViewSet)
router.register(r'item', views.ItemViewSet)
router.register(r'location', views.LocationViewSet)
router.register(r'organization', views.OrganizationViewSet)
router.register(r'donation', views.DonationsViewSet)
router.register(r'donationstatuslog', views.DonationStatusLogViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
