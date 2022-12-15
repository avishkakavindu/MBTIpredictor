from rest_framework import serializers

from api.models import User
from .mbti_type_serializer import MBTITypeSerializer


class UserSerializer(serializers.ModelSerializer):
    mbti_type = MBTITypeSerializer()

    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'full_name', 'gender', 'mbti_type']