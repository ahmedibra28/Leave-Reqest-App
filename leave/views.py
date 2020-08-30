from rest_framework import viewsets, permissions
from .models import Department, Leave_type, Employee, Leave_request
from .serializers import (
    DepartmentSerializer, 
    LeaveTypeSerializer, 
    EmployeeSerializer, 
    LeaveRequestSerializer
)

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
    queryset = Employee.objects.all().order_by('-id')
    serializer_class = EmployeeSerializer
    permission_classes = [permissions.IsAuthenticated]

class LeaveRequestViewSet(viewsets.ModelViewSet):
    queryset = Leave_request.objects.all().order_by('-id')
    serializer_class = LeaveRequestSerializer
    permission_classes = [permissions.IsAuthenticated]