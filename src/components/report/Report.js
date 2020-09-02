import React, { useState, useEffect } from "react";
import ReportForm from './ReportForm'
import ReportList from './ReportList'
import ReportValidate from "../../validations/ReportValidations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getLeaveRequestFilter } from "../../actions/leaveRequestActions"
import { getLeaveTypes } from "../../actions/leaveTypeActions"
import { getDepartments } from "../../actions/departmentActions"
import { getEmployees } from "../../actions/employeeActions";




const initialValues = {
    id: null,
    emp_id: '',
    leave: '',
    start_date: '',
    end_date: '',
}

function Report(props) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSebmitting] = useState(false);


    const {
      employees,
      leave_requests,
      getLeaveRequestFilter,
      getLeaveTypes,
      getEmployees,
      leave_types,
      getDepartments,
      departments
    } = props;

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(ReportValidate(values));
        setIsSebmitting(true);
      }; 

      useEffect(() => {
        
        getLeaveTypes()
        getDepartments()
        getEmployees()
      }, [])

      
      
      useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          
          // It's for search purpose
          const empIdEmp_id = id => employees && employees.find(emp => emp.emp_id === id && emp.name )  
          const leaveIdName = id => leave_types && leave_types.find(lt => lt.id === id && lt.name)  
          getLeaveRequestFilter(
            empIdEmp_id(values.emp_id) ? empIdEmp_id(values.emp_id).id : '', 
            leaveIdName(parseInt(values.leave)) ? leaveIdName(parseInt(values.leave)).id : '',
            values.start_date, values.end_date)
          setValues({
            ...values,
            name: "",
          });
        }
      }, [errors]);

      const departmentIdToName = id => {
        return (
          employees && employees.map(emp => emp.id === id && departments && departments.map(dep => dep.id === emp.department && dep.name )  )  
        )
      }
      const leaveTypeIdToName = id => leave_types && leave_types.map(lt => lt.id === id && lt.name )  
      const employeeIdToName = id => employees && employees.map(emp => emp.id === id && emp.name )  
      
      
    return (
        <div className="row pt-4">
            <div className="col-md-4">
                <ReportForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                errors={errors}
                values={values}
                leave_types={leave_types}
                />
            </div>
            <div className="col-md-8">
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

Report.propTypes = {
  getDepartments: PropTypes.func.isRequired,
  getEmployees: PropTypes.func.isRequired,
  getLeaveTypes: PropTypes.func.isRequired,
  getLeaveRequestFilter: PropTypes.func.isRequired,
  employees: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  leave_requests: state.leave_requests.leave_request_filter,
  employees: state.employees.employees,
  leave_types: state.leave_types.leave_types,
  departments: state.departments.departments,
});

export default connect(mapStateToProps, {
  getLeaveRequestFilter,
  getLeaveTypes,
  getDepartments,
  getEmployees
})(Report);

