export default function ResignValidate(values) {
  let errors = {};

  if (!values.employee) {
    errors.employee = "Emp. ID is required";
  } else if (!values.resign_type) {
    errors.resign_type = "Resign Type is required";
  } else if (!values.resign_date) {
    errors.resign_date = "Resign Date is required";
  }

  return errors;
}
