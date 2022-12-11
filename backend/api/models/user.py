from django.contrib.auth.models import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from .mbti_type import MBTIType
from api.serializers import MBTITypeSerializer


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **kwargs):
        if not email:
            raise ValueError("Users must have an email address")
        email = self.normalize_email(email)
        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, **kwargs):
        kwargs.setdefault('is_active', True)
        kwargs.setdefault('is_staff', True)
        kwargs.setdefault('is_superuser', True)
        if kwargs.get('is_active') is not True:
            raise ValueError('Superuser must be active')
        if kwargs.get('is_staff') is not True:
            raise ValueError('Superuser must be staff')
        if kwargs.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True')
        return self.create_user(email, password, **kwargs)


class User(AbstractBaseUser, PermissionsMixin):
    MALE, FEMALE = 0, 1

    GENDER = [
        (MALE, 'Male'),
        (FEMALE, 'Female')
    ]

    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    gender = models.PositiveSmallIntegerField(
        choices=GENDER,
        null=False,
        blank=False,
        error_messages={
            'required': 'This field is required.'
        }
    )
    mbti_type = models.ForeignKey(MBTIType, null=True, blank=False, on_delete=models.DO_NOTHING)

    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'full_name', 'gender', 'user_mbti_type']

    def __str__(self):
        return self.email

    @property
    def full_name(self):
        return f"{self.first_name}{self.last_name}"

    @property
    def user_mbti_type(self):
        obj = MBTIType.objects.get(id=self.mbti_type.id)
        serializer = MBTITypeSerializer(obj)
        return serializer.data


