from django.db import models
from . import MBTIType, User


class Prediction(models.Model):
    """ Holds prediction results """

    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False)
    mbti_type = models.ForeignKey(MBTIType, default=None, null=True, blank=True, on_delete=models.DO_NOTHING)
    text = models.TextField(null=False, blank=False)
    isPrivate = models.BooleanField(default=False)
    isCorrect = models.BooleanField(default=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    def __str__(self):
        return f'{self.user}-{self.mbti_type}-{self.date_created}'

    @property
    def get_number_of_predictions(self):
        return Prediction.objects.count()

    @property
    def get_number_of_success_predictions(self):
        print('here', Prediction.objects.filter(isCorrect=True).count())
        return Prediction.objects.filter(isCorrect=True).count()

    @property
    def get_number_of_failed_predictions(self):
        return Prediction.objects.filter(isCorrect=False).count()

