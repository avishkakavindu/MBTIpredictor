from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework_simplejwt.authentication import JWTTokenUserAuthentication

from backend.mbti_predictor import predictor

from api.models import Prediction, MBTIType, User
from api.serializers import PredictionSerializer, MBTITypeSerializer

predictor_obj = predictor.MBTIPredictor()


class PredictionAPIView(APIView):
    """ Handles the operations related to predictions """

    authentication_classes = [JWTTokenUserAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    serializer_class = PredictionSerializer

    def get_object(self, pk):
        try:
            return Prediction.objects.get(pk=pk)
        except Prediction.DoesNotExist:
            raise Http404

    def get(self, request, number_of_predictions=5, *args, **kwargs):
        """ Returns n random predictions"""
        predictions = Prediction.objects.filter(
            isPrivate=False,
            isCorrect=True
        ).order_by('?')[:number_of_predictions]
        serializer = PredictionSerializer(predictions, context={'request': request}, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        """ Handle generating predictions """
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

        mbti_type_dict = {value: key for key, value in MBTIType.MBTI_TYPES}

        pred = MBTIType.objects.get(
            mbti_type=mbti_type_dict[
                list(predictions.keys())[0]
            ]
        )

        try:
            # save record
            obj = Prediction.objects.create(
                user=User.objects.get(pk=request.user.id),
                mbti_type=pred,
                text=text
            )
            msg = {
                'is_success': True,
                'detail': 'Record has been created!'
            }
        except Exception as e:
            msg = {
                'is_success': False,
                'detail': 'Failed to save the record!'
            }

        serializer = MBTITypeSerializer(pred, context={'request': request})

        if list(predictions.values())[0] < 0.5:
            is_low_accuracy = True

        context = {
            'predictions': {
                'id': obj.id,
                'mbti_types': list(predictions.keys()),
                'probabilities': map(lambda x: x * 100, list(predictions.values())),
                'best_mbti_type': serializer.data
            },
            'is_low_accuracy': is_low_accuracy,
            'msg': msg,
            'is_correct': True,
            'is_private': False
        }

        return Response(context, status=status.HTTP_200_OK)

    def patch(self, request, pk=None, *args, **kwargs):
        """ Handles is_private, and wrong prediction marking """
        if pk is None:
            context = {
                'is_success': False,
                'detail': 'Invalid prediction ID!'
            }
            return Response(context, status=status.HTTP_400_BAD_REQUEST)

        obj = self.get_object(pk)
        serializer = PredictionSerializer(
            obj,
            data=request.data,
            partial=True,
            context={'request': request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


