from django.core.validators import FileExtensionValidator
from django.db import models


class MBTIType(models.Model):
    """
        Stores MBTI personality type details
    """
    ISTJ, ISFJ, INFJ, INTJ, ISTP, ISFP, INFP, INTP, \
    ESTP, ESFP, ENFP, ENTP, ESTJ, ESFJ, ENFJ, ENTJ = [i for i in range(16)]

    MBTI_TYPES = [
        (ISTJ, 'ISTJ'), (ISFJ, 'ISFJ'), (INFJ, 'INFJ'), (INTJ, 'INTJ'),
        (ISTP, 'ISTP'), (ISFP, 'ISFP'), (INFP, 'INFP'), (INTP, 'INTP'),
        (ESTP, 'ESTP'), (ESFP, 'ESFP'), (ENFP, 'ENFP'), (ENTP, 'ENTP'),
        (ESTJ, 'ESTJ'), (ESFJ, 'ESFJ'), (ENFJ, 'ENFJ'), (ENTJ, 'ENTJ')
    ]

    file_validator = FileExtensionValidator(allowed_extensions=["svg"])

    mbti_type = models.PositiveSmallIntegerField(choices=MBTI_TYPES, default=0, unique=True)
    name = models.CharField(max_length=100, null=False, blank=False)
    description = models.TextField(blank=False, null=False)
    image_male = models.FileField(
        upload_to='uploads/mbti_types/male',
        null=False,
        blank=False,
        validators=[file_validator]
    )
    image_female = models.FileField(
        upload_to='uploads/mbti_types/female',
        null=False,
        blank=False,
        validators=[file_validator]
    )

    def __str__(self):
        return self.get_mbti_type_display()
