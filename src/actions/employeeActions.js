import {
    GET_EMPLOYEES,
    ADD_EMPLOYEE,
    DELETE_EMPLOYEE,
    UPDATE_EMPLOYEE,
  } from "./types";
  import { createMessage, returnErrors } from "./messageActions";
  import axios from "axios";
  import { tokenConfig } from "./authActions";
  
  const url = `http://127.0.0.1:8000/`;
  
  
  export const getEmployees = () => (dispatch, getState) => {
    axios
      .get(
        `${url}api/employee/`,
        tokenConfig(getState)
      )
      .then((employees) => {
        dispatch({
          type: GET_EMPLOYEES,
          payload: employees.data,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const addEmployee = (employee) => (dispatch, getState) => {
    console.log(employee)
    axios
      .post(`${url}api/employee/`, employee, tokenConfig(getState))
      .then((res) => {
        dispatch(
          createMessage({
            addEmployee: "Employee Added",
          })
        );
        dispatch({
          type: ADD_EMPLOYEE,
          payload: res.data,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const deleteEmployee = (id) => (dispatch, getState) => {
    axios
      .delete(`${url}api/employee/${id}/`, tokenConfig(getState))
      .then((employees) => {
        dispatch(
          createMessage({
            deleteEmployee: "Employee Deleted",
          })
        );
        dispatch({
          type: DELETE_EMPLOYEE,
          payload: id,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const updateEmployee = (employee) => (dispatch, getState) => {
    axios
      .put(
        `${url}api/employee/${employee.id}/`,
        employee,
        tokenConfig(getState)
      )
      .then((res) => {
        dispatch(
          createMessage({
            updateEmployee: "Employee Updated",
          })
        );
        dispatch({
          type: UPDATE_EMPLOYEE,
          payload: res.data,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  