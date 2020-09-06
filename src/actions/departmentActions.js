import {
  GET_DEPARTMENTS,
  ADD_DEPARTMENT,
  DELETE_DEPARTMENT,
  UPDATE_DEPARTMENT,
  URL,
} from "./types";
import { createMessage, returnErrors } from "./messageActions";
import axios from "axios";
import { tokenConfig } from "./authActions";

export const getDepartments = () => (dispatch, getState) => {
  axios
    .get(`${URL}api/department/`, tokenConfig(getState))
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
  axios
    .post(`${URL}api/department/`, department, tokenConfig(getState))
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
    .delete(`${URL}api/department/${id}/`, tokenConfig(getState))
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
      `${URL}api/department/${department.id}/`,
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
