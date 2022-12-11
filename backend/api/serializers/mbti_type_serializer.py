from rest_framework import serializers
from api.models import MBTIType


class MBTITypeSerializer(serializers.ModelSerializer):
    mbti_display = serializers.SerializerMethodField('get_mbti_display')

    class Meta:
        model = MBTIType
        fields = ['id', 'mbti_type', 'name', 'description', 'image_male', 'image_female', 'mbti_display']

    def get_mbti_display(self, obj):
        return obj.get_mbti_type_display()
