export default function LeaveRequestalidate(values) {
    let errors = {};
  
    if (!values.employee) {
      errors.employee = "Emp. ID is required";
    } else if (!values.leave) {
        errors.leave = "Leave Type is required";
      } else if (!values.start_date) {
        errors.start_date = "Start Date is required";
      }else if (!values.end_date) {
        errors.end_date = "End Date is required";
      }else if (values.start_date > values.end_date) {
        errors.end_date =
          "Please ensure that the End Date is greater than or equal to the Start Date.";
      }
    return errors;
  }
  