from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """
        User model of the project
    """
    ISTJ, ISFJ, INFJ, INTJ, ISTP, ISFP, INFP, INTP, \
    ESTP, ESFP, ENFP, ENTP, ESTJ, ESFJ, ENFJ, ENTJ = [i for i in range(16)]

    MBTI_TYPES = [
        (ISTJ, 'ISTJ'), (ISFJ, 'ISFJ'), (INFJ, 'INFJ'), (INTJ, 'INTJ'),
        (ISTP, 'ISTP'), (ISFP, 'ISFP'), (INFP, 'INFP'), (INTP, 'INTP'),
        (ESTP, 'ESTP'), (ESFP, 'ESFP'), (ENFP, 'ENFP'), (ENTP, 'ENTP'),
        (ESTJ, 'ESTJ'), (ESFJ, 'ESFJ'), (ENFJ, 'ENFJ'), (ENTJ, 'ENTJ')
    ]

    gender = models.BooleanField(default=True)
    mbti_type = models.PositiveIntegerField(choices=MBTI_TYPES, null=True, blank=True)

    class Meta:
        app_label = 'api'

    def __str__(self):
        return self.username