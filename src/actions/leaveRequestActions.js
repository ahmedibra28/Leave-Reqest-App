import {
    GET_LEAVE_REQUESTS,
    ADD_LEAVE_REQUEST,
    DELETE_LEAVE_REQUEST,
    UPDATE_LEAVE_REQUEST,
  } from "./types";
  import { createMessage, returnErrors } from "./messageActions";
  import axios from "axios";
  import { tokenConfig } from "./authActions";
  
  const url = `http://127.0.0.1:8000/`;
  
  
  export const getLeaveRequests = () => (dispatch, getState) => {
    axios
      .get(
        `${url}api/leave-request/`,
        tokenConfig(getState)
      )
      .then((leave_tequests) => {
        dispatch({
          type: GET_LEAVE_REQUESTS,
          payload: leave_tequests.data,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const addLeaveRequest = (leave_request) => (dispatch, getState) => {
    console.log(leave_request)
    axios
      .post(`${url}api/leave-request/`, leave_request, tokenConfig(getState))
      .then((res) => {
        dispatch(
          createMessage({
            addLeaveRequest: "Leave Request Added",
          })
        );
        dispatch({
          type: ADD_LEAVE_REQUEST,
          payload: res.data,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const deleteLeaveRequest = (id) => (dispatch, getState) => {
    axios
      .delete(`${url}api/leave-request/${id}/`, tokenConfig(getState))
      .then((leave_tequests) => {
        dispatch(
          createMessage({
            deleteLeaveRequest: "Leave Request Deleted",
          })
        );
        dispatch({
          type: DELETE_LEAVE_REQUEST,
          payload: id,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const updateLeaveRequest= (leave_request) => (dispatch, getState) => {
    axios
      .put(
        `${url}api/leave-request/${leave_request.id}/`,
        leave_request,
        tokenConfig(getState)
      )
      .then((res) => {
        dispatch(
          createMessage({
            updateLeaveRequest: "LeaveRequest Updated",
          })
        );
        dispatch({
          type: UPDATE_LEAVE_REQUEST,
          payload: res.data,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  