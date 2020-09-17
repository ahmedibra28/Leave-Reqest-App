from rest_framework import serializers
from .models import Department, Leave_type, Employee, Leave_request, Resign

class DepartmentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Department
        fields = ('id', 'name')


class LeaveTypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Leave_type
        fields = ('id', 'name')


class EmployeeSerializer(serializers.ModelSerializer):
    # department = serializers.CharField()
    class Meta:
        model = Employee
        fields = ('id', 'emp_id', 'name', 'mobile', 'gender', 'department', 'active')
    


class LeaveRequestSerializer(serializers.ModelSerializer):
    # employee = serializers.CharField()
    # leave = serializers.CharField()
    class Meta:
        model = Leave_request
        fields = ('id', 'employee', 'leave', 'start_date', 'end_date', 'description')


class ResignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resign
        fields = ('id', 'employee', 'resign_date', 'resign_type', 'resign_reason')