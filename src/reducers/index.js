import { combineReducers } from "redux";
import errorReducers from "./errorReducers";
import messageReducers from "./messageReducers";
import authReducers from "./authReducers";
import departmentReducers from "./departmentReducers";
import leaveTypeReducers from "./leaveTypeReducers";

export default combineReducers({
  departments: departmentReducers,
  leave_types: leaveTypeReducers,
  errors: errorReducers,
  messages: messageReducers,
  auth: authReducers,
});
