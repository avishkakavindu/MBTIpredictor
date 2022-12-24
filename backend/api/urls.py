from django.urls import path, include
from api.api_views import *

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('mbti-types/<str:gender>', MBTITypeListAPIView.as_view(), name='list_mbti_types'),
    path('counts/', CountAPIView.as_view(), name='counts'),
    path('predictions', PredictionAPIView.as_view(), name='predictions'),
    path('predictions/<int:number_of_predictions>', PredictionAPIView.as_view(), name='random_predictions')
]