from rest_framework import serializers
from .models import Department, Leave_type, Employee, Leave_request

class DepartmentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Department
        fields = ('id', 'name')


class LeaveTypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Leave_type
        fields = ('id', 'name')


class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    # department = serializers.ReadOnlyField(source='department.name')
    class Meta:
        model = Employee
        fields = '__all__'
    


class LeaveRequestSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Leave_request
        fields = '__all__'