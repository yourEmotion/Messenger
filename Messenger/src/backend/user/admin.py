from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin as defaultUserAdmin


class UserAdmin(defaultUserAdmin):
    fieldsets = defaultUserAdmin.fieldsets + ((None, {'fields': ('birth_date', 'city', 'friends')}),)
    add_fieldsets = defaultUserAdmin.add_fieldsets + ((None, {'fields': ('birth_date', 'city', 'friends')}),)


admin.site.register(User, UserAdmin)
