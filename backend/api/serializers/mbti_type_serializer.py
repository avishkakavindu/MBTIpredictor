from rest_framework import serializers
from api.models import MBTIType


class MBTITypeSerializer(serializers.ModelSerializer):
    mbti_display = serializers.SerializerMethodField('get_mbti_display')
    image_male = serializers.SerializerMethodField('get_image_male_url')
    image_female = serializers.SerializerMethodField('get_image_female_url')

    class Meta:
        model = MBTIType
        fields = ['id', 'mbti_type', 'name', 'description', 'image_male', 'image_female', 'mbti_display']

    def get_mbti_display(self, obj):
        return obj.get_mbti_type_display()

    def get_image_male_url(self, obj):
        request = self.context.get('request')
        image_url = obj.image_male.url
        return request.build_absolute_uri(image_url)

    def get_image_female_url(self, obj):
        request = self.context.get('request')
        image_url = obj.image_female.url
        return request.build_absolute_uri(image_url)
