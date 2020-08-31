import React, { useState, useEffect } from "react";
import LeaveRequestForm from './LeaveRequestForm'
import LeaveRequestList from './LeaveRequestList'
import LeaveRequestValidate from "../../validations/LeaveRequestValidations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getLeaveRequests,
  addLeaveRequest,
  deleteLeaveRequest,
  updateLeaveRequest,
} from "../../actions/leaveRequestActions"
import { getLeaveTypes } from "../../actions/leaveTypeActions"
import { getEmployees } from "../../actions/employeeActions";


const initialValues = {
    id: null,
    employee: "",
    leave: '',
    start_date: '',
    end_date: '',
    description: ''
}

function LeaveRequest(props) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSebmitting] = useState(false);
    const [edit, setEdit] = useState(false);


    const {
      leave_requests,
      deleteLeaveRequest,
      getLeaveRequests,
      addLeaveRequest,
      updateLeaveRequest,
      getEmployees,
      employees,
      getLeaveTypes,
      leave_types
    } = props;

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleUpdate = (e) => {
        console.log(e)
        setValues({
          ...values,
          id: e.id,
          employee: e.employee,
          leave: e.leave,
          start_date: e.start_date,
          end_date: e.end_date,
          description:e.description
        });
        setEdit(true);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(LeaveRequestValidate(values));
        setIsSebmitting(true);
      }; 

      useEffect(() => {
        getLeaveRequests()
        getEmployees()
        getLeaveTypes()
      }, [])


      useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          edit ? updateLeaveRequest(values) : addLeaveRequest(values);
          setEdit(false);

        console.log(values)
          setValues({
            ...values,
            employee: "",
            leave: '',
            start_date: '',
            end_date: '',
            description: ''
          });
        }
      }, [errors]);


      const leaveTypeIdToName = id => leave_types && leave_types.map(lt => lt.id === id && lt.name )  
      const employeeIdToName = id => employees && employees.map(emp => emp.id === id && emp.name )  
      

    return (
        <div className="row pt-4">
            <div className="col-md-4">
                <LeaveRequestForm
                employees={employees}
                leave_types={leave_types}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                errors={errors}
                values={values}
                />
            </div>
            <div className="col-md-8">
                <LeaveRequestList
                handleUpdate={handleUpdate}
                deleteLeaveRequest={deleteLeaveRequest}
                leave_requests={leave_requests}
                leaveTypeIdToName={leaveTypeIdToName}
                employeeIdToName={employeeIdToName}
                />
            </div>
        </div>
    )
}

LeaveRequest.propTypes = {
  getLeaveRequests: PropTypes.func.isRequired,
  addLeaveRequest: PropTypes.func.isRequired,
  deleteLeaveRequest: PropTypes.func.isRequired,
  updateLeaveRequest: PropTypes.func.isRequired,
  getEmployees: PropTypes.func.isRequired,
  employees: PropTypes.array.isRequired,
  getLeaveTypes: PropTypes.func.isRequired,
  leave_requests: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  leave_requests: state.leave_requests.leave_requests,
  leave_types: state.leave_types.leave_types,
  employees: state.employees.employees,
});

export default connect(mapStateToProps, {
  getLeaveRequests,
  addLeaveRequest,
  updateLeaveRequest,
  deleteLeaveRequest,
  getEmployees,
  getLeaveTypes
})(LeaveRequest);

