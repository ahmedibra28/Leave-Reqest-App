import {
    GET_LEAVE_REQUESTS,
    ADD_LEAVE_REQUEST,
    DELETE_LEAVE_REQUEST,
    UPDATE_LEAVE_REQUEST,
  } from "../actions/types";
  
  const initialState = {
    leave_requests: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_LEAVE_REQUESTS:
        return {
          ...state,
          leave_requests: action.payload,
        };
      case ADD_LEAVE_REQUEST:
        return {
          ...state,
          leave_requests: [...state.leave_requests, action.payload],
        };
      case UPDATE_LEAVE_REQUEST:
        const leave_requestsExisted = state.leave_requests.filter(
          (transfusion) => transfusion.id !== action.payload.id
        );
        return {
          leave_requests: [action.payload, ...leave_requestsExisted],
        };
  
      case DELETE_LEAVE_REQUEST:
        return {
          ...state,
          leave_requests: state.leave_requests.filter(
            (transfusion) => transfusion.id !== action.payload
          ),
        };
      default:
        return state;
    }
  }
  