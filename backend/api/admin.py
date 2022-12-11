from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from api.models import User, MBTIType


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass

@admin.register(MBTIType)
class MBTITypeAdmin(admin.ModelAdmin):
    pass
