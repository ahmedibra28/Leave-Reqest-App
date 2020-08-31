export default function EmployeeValidate(values) {
    let errors = {};
  
    if (!values.emp_id) {
      errors.emp_id = "Emp. ID is required";
    } else if (!values.name) {
        errors.name = "Name is required";
      } else if (!values.gender) {
        errors.gender = "Gender is required";
      }else if (!values.mobile) {
        errors.mobile = "Mobile is required";
      }else if (!values.department) {
        errors.department = "Department is required";
      }
    return errors;
  }
  