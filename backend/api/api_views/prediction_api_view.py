from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.models import MBTIType, Prediction
from api.serializers import PredictionSerializer


class PredictionAPIView(APIView):
    """ Handles the operations related to predictions """

    serializer_class = PredictionSerializer

    def get(self, request, number_of_predictions=5, *args, **kwargs):
        predictions = Prediction.objects.filter(
            isPrivate=False,
            isCorrect=True
        ).order_by('?')[:number_of_predictions]
        serializer = PredictionSerializer(predictions, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
