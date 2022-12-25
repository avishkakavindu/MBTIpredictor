from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

from api.models import MBTIType
from api.serializers import MBTITypeSerializer


class MBTITypeListAPIView(ListAPIView):
    """ Return all the MBTI types """

    queryset = MBTIType.objects.all()
    serializer_class = MBTITypeSerializer


class MBTITypeAPIView(APIView):
    """ Return all MBTI type """

    def get(self, request, *args, **kwargs):
        mbti_types = {value: key for key, value in MBTIType.MBTI_TYPES}
        type_dict = {}

        for val in list(mbti_types.values()):
            obj = MBTIType.objects.get(mbti_type=val)
            type_dict[obj.get_mbti_type_display()] = obj.id

        context = {
            'mbti_types': list(type_dict.keys()),
            'values': list(type_dict.values())
        }
        return Response(context, status=status.HTTP_200_OK)
