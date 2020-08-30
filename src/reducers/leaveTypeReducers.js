import {
    GET_LEAVE_TYPES,
    ADD_LEAVE_TYPE,
    DELETE_LEAVE_TYPE,
    UPDATE_LEAVE_TYPE,
  } from "../actions/types";
  
  const initialState = {
    leave_types: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_LEAVE_TYPES:
        return {
          ...state,
          leave_types: action.payload,
        };
      case ADD_LEAVE_TYPE:
        return {
          ...state,
          leave_types: [...state.leave_types, action.payload],
        };
      case UPDATE_LEAVE_TYPE:
        const leave_typesExisted = state.leave_types.filter(
          (transfusion) => transfusion.id !== action.payload.id
        );
        return {
          leave_types: [action.payload, ...leave_typesExisted],
        };
  
      case DELETE_LEAVE_TYPE:
        return {
          ...state,
          leave_types: state.leave_types.filter(
            (transfusion) => transfusion.id !== action.payload
          ),
        };
      default:
        return state;
    }
  }
  