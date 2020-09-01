import {
    GET_DEPARTMENTS,
    ADD_DEPARTMENT,
    DELETE_DEPARTMENT,
    UPDATE_DEPARTMENT,
  } from "./types";
  import { createMessage, returnErrors } from "./messageActions";
  import axios from "axios";
  import { tokenConfig } from "./authActions";
  
  const url = `http://127.0.0.1:8000/`;
  
  
  export const getDepartments = () => (dispatch, getState) => {
    console.log(tokenConfig(getState))
    axios
      .get(
        `${url}api/department/`,
        tokenConfig(getState)
      )
      .then((departments) => {
        dispatch({
          type: GET_DEPARTMENTS,
          payload: departments.data,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const addDepartment = (department) => (dispatch, getState) => {
    console.log(department)
    axios
      .post(`${url}api/department/`, department, tokenConfig(getState))
      .then((res) => {
        dispatch(
          createMessage({
            addDepartment: "Department Added",
          })
        );
        dispatch({
          type: ADD_DEPARTMENT,
          payload: res.data,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const deleteDepartment = (id) => (dispatch, getState) => {
    axios
      .delete(`${url}api/department/${id}/`, tokenConfig(getState))
      .then((departments) => {
        dispatch(
          createMessage({
            deleteDepartment: "Department Deleted",
          })
        );
        dispatch({
          type: DELETE_DEPARTMENT,
          payload: id,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const updateDepartment = (department) => (dispatch, getState) => {
    axios
      .put(
        `${url}api/department/${department.id}/`,
        department,
        tokenConfig(getState)
      )
      .then((res) => {
        dispatch(
          createMessage({
            updateDepartment: "Department Updated",
          })
        );
        dispatch({
          type: UPDATE_DEPARTMENT,
          payload: res.data,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  