export default function DepartmentValidate(values) {
    let errors = {};
  
    if (!values.name) {
      errors.name = "Department is required";
    }
    return errors;
  }
  