from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.models import Prediction, User


class CountAPIView(APIView):
    """ Handles the counts section """

    def get(self, request, *args, **kwargs):
        context = {
            'user_count': User.objects.count(),
            'number_of_predictions': Prediction.objects.count(),
            'successful_prediction_count': Prediction.objects.filter(isCorrect=True).count(),
            'unsuccessful_prediction_count': Prediction.objects.filter(isCorrect=False).count()
        }
        return Response(context, status=status.HTTP_200_OK)
