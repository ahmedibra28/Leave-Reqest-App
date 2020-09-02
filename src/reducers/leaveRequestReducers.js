import {
    GET_LEAVE_REQUESTS,
    ADD_LEAVE_REQUEST,
    DELETE_LEAVE_REQUEST,
    UPDATE_LEAVE_REQUEST,
    GET_LEAVE_REQUEST_FILTER,
    GET_LEAVE_REQUEST_FILTER_NOTIF,
  } from "../actions/types";
  
  const initialState = {
    leave_requests: [],
    leave_request_filter: [],
    leave_request_filter_notif: [],
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
      case GET_LEAVE_REQUEST_FILTER:
        return {
          ...state,
          leave_request_filter: action.payload,
        };
      case GET_LEAVE_REQUEST_FILTER_NOTIF:
        return {
          ...state,
          leave_request_filter_notif: action.payload,
        };
      default:
        return state;
    }
  }
  