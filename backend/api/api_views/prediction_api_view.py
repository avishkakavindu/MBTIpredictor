from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from backend.mbti_predictor import predictor

from api.models import Prediction
from api.serializers import PredictionSerializer

predictor_obj = predictor.MBTIPredictor()


class PredictionAPIView(APIView):
    """ Handles the operations related to predictions """

    serializer_class = PredictionSerializer

    def get(self, request, number_of_predictions=5, *args, **kwargs):
        predictions = Prediction.objects.filter(
            isPrivate=False,
            isCorrect=True
        ).order_by('?')[:number_of_predictions]
        serializer = PredictionSerializer(predictions, context={'request': request}, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        text = request.data.get('text')

        if len(text) < 50:
            return Response(
                {'error': 'Please Ensure text has more than 50 characters'},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            predictions = predictor_obj.predict(text)
        except Exception:
            return Response(
                {'error': 'Something went wrong. Cannot predict the MBTI type.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        is_low_accuracy = False

        if list(predictions.values())[0] < 0.5:
            is_low_accuracy = True

        context = {
            'predictions': {
                'mbti_types': list(predictions.keys()),
                'probabilities': list(predictions.values())
            },
            'is_low_accuracy': is_low_accuracy
        }

        return Response(context, status=status.HTTP_200_OK)

