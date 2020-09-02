from rest_framework import routers

from .views import (
    DepartmentViewSet,
    LeaveTypeViewSet,
    EmployeeViewSet,
    LeaveRequestViewSet,

    LeaveRequestFilter
)

router = routers.DefaultRouter()
router.register('department', DepartmentViewSet)
router.register('leave-type', LeaveTypeViewSet)
router.register('employee', EmployeeViewSet)
router.register('leave-request', LeaveRequestViewSet)
router.register('leave-request-filter', LeaveRequestFilter)
urlpatterns = router.urls