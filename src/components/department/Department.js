import React, { useState, useEffect } from "react";
import DepartmentForm from './DepartmentForm'
import DepartmentList from './DepartmentList'
import DepartmentValidate from "../../validations/DepartmentValidations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getDepartments,
  addDepartment,
  deleteDepartment,
  updateDepartment,
} from "../../actions/departmentActions"


const initialValues = {
    id: null,
    name: ""
}

function Department(props) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSebmitting] = useState(false);
    const [edit, setEdit] = useState(false);


    const {
      departments,
      deleteDepartment,
      getDepartments,
      addDepartment,
      updateDepartment,
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
        setErrors(DepartmentValidate(values));
        setIsSebmitting(true);
      }; 

      useEffect(() => {
        getDepartments()
      }, [])


      useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          edit ? updateDepartment(values) : addDepartment(values);
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
                <DepartmentForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                errors={errors}
                values={values}
                />
            </div>
            <div className="col-md-8">
                <DepartmentList
                handleUpdate={handleUpdate}
                deleteDepartment={deleteDepartment}
                departments={departments}
                />
            </div>
        </div>
    )
}

Department.propTypes = {
  getDepartments: PropTypes.func.isRequired,
  addDepartment: PropTypes.func.isRequired,
  deleteDepartment: PropTypes.func.isRequired,
  updateDepartment: PropTypes.func.isRequired,
  departments: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  departments: state.departments.departments,
});

export default connect(mapStateToProps, {
  getDepartments,
  addDepartment,
  updateDepartment,
  deleteDepartment,
})(Department);

