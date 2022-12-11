from django.urls import path, include
from api.api_views import *

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('mbti-types/<str:gender>', MBTITypeListAPIView.as_view(), name='list_mbti_types')
]