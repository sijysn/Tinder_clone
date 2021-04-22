from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import *

class CustomUserAdmin(UserAdmin):
  fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'email', 'image', 'birth_date', 'gender_identity', 'sexual_preference', 'profession', 'self_introduction')}),
        ('Permissions', {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
        }),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
  )

# Register your models here.
admin.site.register(User, CustomUserAdmin)
admin.site.register(Reaction)
admin.site.register(ChatRoom)
admin.site.register(ChatRoomUser)
admin.site.register(Message)
