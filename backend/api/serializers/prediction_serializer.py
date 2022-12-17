from rest_framework import serializers
from api.models import Prediction

from api.serializers import *


class PredictionSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    mbti_type = MBTITypeSerializer()

    class Meta:
        model = Prediction
        fields = '__all__'