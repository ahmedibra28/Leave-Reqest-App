from django.contrib import admin
from .models import Department, Leave_type, Employee, Leave_request, Resign

# Register your models here.
admin.site.register(Department)
admin.site.register(Leave_type)
admin.site.register(Employee)
admin.site.register(Leave_request)
admin.site.register(Resign)