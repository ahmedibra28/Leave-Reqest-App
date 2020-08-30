import React, { useState, useEffect } from "react";
import LeaveTypeForm from './LeaveTypeForm'
import LeaveTypeList from './LeaveTypeList'
import LeaveTypeValidate from "../../validations/LeaveTypeValidations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getLeaveTypes,
  addLeaveType,
  deleteLeaveType,
  updateLeaveType,
} from "../../actions/leaveTypeActions"


const initialValues = {
    id: null,
    name: ""
}

function LeaveType(props) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSebmitting] = useState(false);
    const [edit, setEdit] = useState(false);


    const {
      leave_types,
      deleteLeaveType,
      getLeaveTypes,
      addLeaveType,
      updateLeaveType,
    } = props;

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleUpdate = (e) => {
        setValues({
          ...values,
          id: e.id,
          name: e.name
          
        });
        setEdit(true);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(LeaveTypeValidate(values));
        setIsSebmitting(true);
      }; 

      useEffect(() => {
        getLeaveTypes()
      }, [])


      useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          edit ? updateLeaveType(values) : addLeaveType(values);
          setEdit(false);

        // console.log(values)
          setValues({
            ...values,
            name: ""
          });
        }
      }, [errors]);

    return (
        <div className="row pt-4">
            <div className="col-md-4">
                <LeaveTypeForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                errors={errors}
                values={values}
                />
            </div>
            <div className="col-md-8">
                <LeaveTypeList
                handleUpdate={handleUpdate}
                deleteLeaveType={deleteLeaveType}
                leave_types={leave_types}
                />
            </div>
        </div>
    )
}

LeaveType.propTypes = {
  getLeaveTypes: PropTypes.func.isRequired,
  addLeaveType: PropTypes.func.isRequired,
  deleteLeaveType: PropTypes.func.isRequired,
  updateLeaveType: PropTypes.func.isRequired,
  leave_types: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  leave_types: state.leave_types.leave_types,
});

export default connect(mapStateToProps, {
  getLeaveTypes,
  addLeaveType,
  updateLeaveType,
  deleteLeaveType,
})(LeaveType);

