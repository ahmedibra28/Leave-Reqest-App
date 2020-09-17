import React, { useState, useEffect } from "react";
import ResignForm from "./ResignForm";
import ResignList from "./ResignList";
import ResignValidate from "../../validations/ResignValidations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getResigns,
  addResign,
  deleteResign,
  updateResign,
} from "../../actions/resignActions";
import { getEmployees, updateEmployee } from "../../actions/employeeActions";

const initialValues = {
  id: null,
  employee: "",
  resign_date: "",
  resign_type: "",
  resign_reason: "",
};

function Resign(props) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSebmitting] = useState(false);
  const [edit, setEdit] = useState(false);

  const {
    deleteResign,
    getResigns,
    addResign,
    updateResign,
    getEmployees,
    updateEmployee,
    employees,
    resigns,
  } = props;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    console.log(e);
    setValues({
      ...values,
      id: e.id,
      employee: e.employee,
      resign_date: e.resign_date,
      resign_type: e.resign_type,
      resign_reason: e.resign_reason,
    });
    setEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(ResignValidate(values));
    setIsSebmitting(true);
  };

  useEffect(() => {
    getResigns();
    getEmployees();
  }, []);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      edit ? updateResign(values) : addResign(values);
      setEdit(false);

      // console.log(values);
      const EmpUpdate =
        values.employee &&
        employees.filter((emp) => emp.id === parseInt(values.employee));

      const updatedEmp = {
        active: false,
        department: EmpUpdate[0].department,
        emp_id: EmpUpdate[0].emp_id,
        gender: EmpUpdate[0].gender,
        id: EmpUpdate[0].id,
        mobile: EmpUpdate[0].mobile,
        name: EmpUpdate[0].name,
      };
      updateEmployee(updatedEmp);
      setValues({
        ...values,
        employee: "",
        resign_date: "",
        resign_type: "",
        resign_reason: "",
      });
    }
  }, [errors]);

  const employeeIdToName = (id) =>
    employees && employees.map((emp) => emp.id === id && emp.name);

  return (
    <div className="row pt-4">
      <div className="col-md-4">
        <ResignForm
          employees={employees}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
          values={values}
        />
      </div>
      <div className="col-md-8">
        <ResignList
          handleUpdate={handleUpdate}
          deleteResign={deleteResign}
          resigns={resigns}
          employeeIdToName={employeeIdToName}
        />
      </div>
    </div>
  );
}

Resign.propTypes = {
  getResigns: PropTypes.func.isRequired,
  addResign: PropTypes.func.isRequired,
  deleteResign: PropTypes.func.isRequired,
  updateResign: PropTypes.func.isRequired,
  updateEmployee: PropTypes.func.isRequired,
  getEmployees: PropTypes.func.isRequired,
  employees: PropTypes.array.isRequired,
  resigns: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  resigns: state.resigns.resigns,
  employees: state.employees.employees,
});

export default connect(mapStateToProps, {
  getResigns,
  addResign,
  updateResign,
  deleteResign,
  getEmployees,
  updateEmployee,
})(Resign);
