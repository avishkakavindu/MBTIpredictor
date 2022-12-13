from rest_framework.generics import ListAPIView

from api.models import MBTIType
from api.serializers import MBTITypeSerializer


class MBTITypeListAPIView(ListAPIView):
    """ Return all the MBTI types """

    queryset = MBTIType.objects.all()
    serializer_class = MBTITypeSerializer
