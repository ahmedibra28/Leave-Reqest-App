import {
  GET_RESIGNS,
  ADD_RESIGN,
  DELETE_RESIGN,
  UPDATE_RESIGN,
  URL,
} from "./types";
import { createMessage, returnErrors } from "./messageActions";
import axios from "axios";
import { tokenConfig } from "./authActions";

export const getResigns = () => (dispatch, getState) => {
  console.log("getting");
  axios
    .get(`${URL}api/resign/`, tokenConfig(getState))
    .then((resigns) => {
      dispatch({
        type: GET_RESIGNS,
        payload: resigns.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addResign = (resign) => (dispatch, getState) => {
  console.log(resign);
  axios
    .post(`${URL}api/resign/`, resign, tokenConfig(getState))
    .then((res) => {
      dispatch(
        createMessage({
          addResign: "Resign Added",
        })
      );
      dispatch({
        type: ADD_RESIGN,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteResign = (id) => (dispatch, getState) => {
  axios
    .delete(`${URL}api/resign/${id}/`, tokenConfig(getState))
    .then((resigns) => {
      dispatch(
        createMessage({
          deleteResign: "Resign Deleted",
        })
      );
      dispatch({
        type: DELETE_RESIGN,
        payload: id,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateResign = (resign) => (dispatch, getState) => {
  axios
    .put(`${URL}api/resign/${resign.id}/`, resign, tokenConfig(getState))
    .then((res) => {
      dispatch(
        createMessage({
          updateResign: "Resign Updated",
        })
      );
      dispatch({
        type: UPDATE_RESIGN,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
