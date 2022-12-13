from rest_framework import serializers
from api.models import Prediction

from api.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class PredictionSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Prediction
        fields = '__all__'