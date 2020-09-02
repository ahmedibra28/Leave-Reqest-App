from rest_framework import viewsets, permissions
from .models import Department, Leave_type, Employee, Leave_request
from .serializers import (
    DepartmentSerializer, 
    LeaveTypeSerializer, 
    EmployeeSerializer, 
    LeaveRequestSerializer
)

from django_filters import rest_framework as filters



# Create your views here.

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all().order_by('-id')
    serializer_class = DepartmentSerializer
    permission_classes = [permissions.IsAuthenticated]

class LeaveTypeViewSet(viewsets.ModelViewSet):
    queryset = Leave_type.objects.all().order_by('-id')
    serializer_class = LeaveTypeSerializer
    permission_classes = [permissions.IsAuthenticated]

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all().order_by('-emp_id')
    serializer_class = EmployeeSerializer
    permission_classes = [permissions.IsAuthenticated]


class LeaveRequestViewSet(viewsets.ModelViewSet):
    queryset = Leave_request.objects.all().order_by('-id')
    serializer_class = LeaveRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    
class LeaveRequestFilter(filters.FilterSet):
    class Meta:
        model = Leave_request
        fields = {
            'employee': ['exact'],
            'leave': ['exact'],
            'start_date': ['lte', 'gte'],
            'end_date': ['gte'],
            # 'start_date': ['date__lte', 'date__gte']   # Use if you are filter DateTImeFiled()
        }

class LeaveRequestFilter(viewsets.ReadOnlyModelViewSet):
    queryset = Leave_request.objects.all().order_by('-id')
    serializer_class = LeaveRequestSerializer
    permission_classes = [permissions.IsAuthenticated]
    filterset_class = LeaveRequestFilter
    