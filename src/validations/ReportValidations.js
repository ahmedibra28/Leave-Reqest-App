export default function ReportValidate(values) {
    let errors = {};
  
    if (values.start_date > values.end_date) {
      errors.end_date =
        "Please ensure that the End Date is greater than or equal to the Start Date.";
    }
    return errors;
  }
  