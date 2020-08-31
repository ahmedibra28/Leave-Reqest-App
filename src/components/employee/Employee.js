import React, { useState, useEffect } from "react";
import EmployeeForm from './EmployeeForm'
import EmployeeList from './EmployeeList'
import EmployeeValidate from "../../validations/EmployeeValidations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from "../../actions/employeeActions"
import {
  getDepartments,
} from "../../actions/departmentActions"


const initialValues = {
    id: null,
    name: "",
    emp_id: '',
    mobile: '',
    gender: '',
    department: ''
}

function Employee(props) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSebmitting] = useState(false);
    const [edit, setEdit] = useState(false);


    const {
      employees,
      deleteEmployee,
      getEmployees,
      addEmployee,
      updateEmployee,
      getDepartments,
      departments
    } = props;

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleUpdate = (e) => {
        setValues({
          ...values,
          id: e.id,
          name: e.name,
          emp_id: e.emp_id,
          mobile: e.mobile,
          gender: e.gender,
          department: e.department
          
        });
        setEdit(true);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(EmployeeValidate(values));
        setIsSebmitting(true);
      }; 

      useEffect(() => {
        getEmployees()
        getDepartments()
      }, [])


      useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          const newData = {
            id: values.id,
            name: values.name,
            emp_id: values.emp_id,
            mobile: values.mobile,
            gender: values.gender,
            department: parseInt(values.department)
          }
          edit ? updateEmployee(newData) : addEmployee(newData);
          setEdit(false);
          setValues({
            ...values,
            name: "",
            emp_id: "",
            mobile: "",
            gender: "",
            department: ""
          });
        }
      }, [errors]);

      const departmentIdToName = id => departments && departments.map(dep => dep.id === id && dep.name )  
      
    return (
        <div className="row pt-4">
            <div className="col-md-4">
                <EmployeeForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                errors={errors}
                values={values}
                departments={departments}
                />
            </div>
            <div className="col-md-8">
                <EmployeeList
                handleUpdate={handleUpdate}
                deleteEmployee={deleteEmployee}
                employees={employees}
                departmentIdToName={departmentIdToName}
                />
            </div>
        </div>
    )
}

Employee.propTypes = {
  getDepartments: PropTypes.func.isRequired,
  getEmployees: PropTypes.func.isRequired,
  addEmployee: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
  updateEmployee: PropTypes.func.isRequired,
  employees: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  employees: state.employees.employees,
  departments: state.departments.departments,
});

export default connect(mapStateToProps, {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  getDepartments
})(Employee);

