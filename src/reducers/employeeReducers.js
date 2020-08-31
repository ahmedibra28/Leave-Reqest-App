import {
    GET_EMPLOYEES,
    ADD_EMPLOYEE,
    DELETE_EMPLOYEE,
    UPDATE_EMPLOYEE,
  } from "../actions/types";
  
  const initialState = {
    employees: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_EMPLOYEES:
        return {
          ...state,
          employees: action.payload,
        };
      case ADD_EMPLOYEE:
        return {
          ...state,
          employees: [...state.employees, action.payload],
        };
      case UPDATE_EMPLOYEE:
        const employeesExisted = state.employees.filter(
          (transfusion) => transfusion.id !== action.payload.id
        );
        return {
          employees: [action.payload, ...employeesExisted],
        };
  
      case DELETE_EMPLOYEE:
        return {
          ...state,
          employees: state.employees.filter(
            (transfusion) => transfusion.id !== action.payload
          ),
        };
      default:
        return state;
    }
  }
  