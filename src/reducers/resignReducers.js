import {
  GET_RESIGNS,
  ADD_RESIGN,
  DELETE_RESIGN,
  UPDATE_RESIGN,
} from "../actions/types";

const initialState = {
  resigns: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RESIGNS:
      return {
        ...state,
        resigns: action.payload,
      };
    case ADD_RESIGN:
      return {
        ...state,
        resigns: [...state.resigns, action.payload],
      };
    case UPDATE_RESIGN:
      const resignsExisted = state.resigns.filter(
        (transfusion) => transfusion.id !== action.payload.id
      );
      return {
        resigns: [action.payload, ...resignsExisted],
      };

    case DELETE_RESIGN:
      return {
        ...state,
        resigns: state.resigns.filter(
          (transfusion) => transfusion.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
