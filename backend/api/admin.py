from django.contrib import admin
from api.models import User, MBTIType, Prediction


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass


@admin.register(MBTIType)
class MBTITypeAdmin(admin.ModelAdmin):
    pass


@admin.register(Prediction)
class Prediction(admin.ModelAdmin):
    pass