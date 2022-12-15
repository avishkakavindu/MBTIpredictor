from rest_framework import serializers
from api.models import Prediction

from api.serializers import UserSerializer


class PredictionSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Prediction
        fields = '__all__'