import React, { useState, useEffect } from "react";
import ReportList from './NotifReportList'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getLeaveRequestFilterNotif } from "../../actions/leaveRequestActions"
import { getLeaveTypes } from "../../actions/leaveTypeActions"
import { getDepartments } from "../../actions/departmentActions"
import { getEmployees } from "../../actions/employeeActions";




function NotifReport(props) {



    const {
      employees,
      leave_requests,
      getLeaveRequestFilterNotif,
      getLeaveTypes,
      getEmployees,
      leave_types,
      getDepartments,
      departments
    } = props;

    let today = new Date();

    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      useEffect(() => {
        getLeaveRequestFilterNotif(date)
        getLeaveTypes()
        getDepartments()
        getEmployees()
      }, [])

      
      
      const departmentIdToName = id => {
        return (
          employees && employees.map(emp => emp.id === id && departments && departments.map(dep => dep.id === emp.department && dep.name )  )  
        )
      }
      const leaveTypeIdToName = id => leave_types && leave_types.map(lt => lt.id === id && lt.name )  
      const employeeIdToName = id => employees && employees.map(emp => emp.id === id && emp.name )  
      
      
    return (
        <div className="row pt-4">
            <div className="col-md-10 mx-auto">
                <ReportList
                leave_requests={leave_requests}
                departmentIdToName={departmentIdToName}
                employeeIdToName={employeeIdToName}
                leaveTypeIdToName={leaveTypeIdToName}
                />
            </div>
        </div>
    )
}

NotifReport.propTypes = {
  getDepartments: PropTypes.func.isRequired,
  getEmployees: PropTypes.func.isRequired,
  getLeaveTypes: PropTypes.func.isRequired,
  getLeaveRequestFilterNotif: PropTypes.func.isRequired,
  employees: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  leave_requests: state.leave_requests.leave_request_filter_notif,
  employees: state.employees.employees,
  leave_types: state.leave_types.leave_types,
  departments: state.departments.departments,
});

export default connect(mapStateToProps, {
  getLeaveRequestFilterNotif,
  getLeaveTypes,
  getDepartments,
  getEmployees
})(NotifReport);

