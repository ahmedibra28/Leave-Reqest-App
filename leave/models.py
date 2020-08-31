from django.db import models

# Create your models here.
class Department(models.Model):
    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Leave_type(models.Model):
    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Employee(models.Model):
    emp_id = models.CharField(max_length=10)
    name = models.CharField(max_length=50)
    gender = models.CharField(max_length=8)
    mobile = models.CharField(max_length=15)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class CustomDateTimeField(models.DateTimeField):
    def value_to_string(self, obj):
        val = self.value_from_object(obj)
        if val:
            val.replace(millisecond=0, second=0, microsecond=0)
            # val.replace(microsecond=0)
            return val.isoformat()
        return ''

# class ConvertingDateTimeField(models.DateTimeField):

#     def get_prep_value(self, value):
#         return str(datetime.strptime(value, FORMAT_STRING))


class Leave_request(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    leave = models.ForeignKey(Leave_type, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    description = models.TextField(max_length=300, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.employee.name

