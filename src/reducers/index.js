import { combineReducers } from "redux";
import errorReducers from "./errorReducers";
import messageReducers from "./messageReducers";
import authReducers from "./authReducers";
import departmentReducers from "./departmentReducers";
import leaveTypeReducers from "./leaveTypeReducers";
import employeeReducers from "./employeeReducers";
import leaveRequestReducers from "./leaveRequestReducers";
import resignReducers from "./resignReducers";

export default combineReducers({
  resigns: resignReducers,
  departments: departmentReducers,
  leave_requests: leaveRequestReducers,
  employees: employeeReducers,
  leave_types: leaveTypeReducers,
  errors: errorReducers,
  messages: messageReducers,
  auth: authReducers,
});
