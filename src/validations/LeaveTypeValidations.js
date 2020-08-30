export default function LeaveTypeValidate(values) {
    let errors = {};
  
    if (!values.name) {
      errors.name = "Leave Type is required";
    }
    return errors;
  }
  