import {
    GET_DEPARTMENTS,
    ADD_DEPARTMENT,
    DELETE_DEPARTMENT,
    UPDATE_DEPARTMENT,
  } from "../actions/types";
  
  const initialState = {
    departments: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_DEPARTMENTS:
        return {
          ...state,
          departments: action.payload,
        };
      case ADD_DEPARTMENT:
        return {
          ...state,
          departments: [...state.departments, action.payload],
        };
      case UPDATE_DEPARTMENT:
        const departmentsExisted = state.departments.filter(
          (transfusion) => transfusion.id !== action.payload.id
        );
        return {
          departments: [action.payload, ...departmentsExisted],
        };
  
      case DELETE_DEPARTMENT:
        return {
          ...state,
          departments: state.departments.filter(
            (transfusion) => transfusion.id !== action.payload
          ),
        };
      default:
        return state;
    }
  }
  