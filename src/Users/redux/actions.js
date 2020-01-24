import * as actionTypes from "./actionTypes";
import * as api from "./api";

export const addUser = () => dispatch => {
  dispatch({ type: actionTypes.ADD });

  return api.getUser().then(
    response => dispatch({ type: actionTypes.ADD_SUCCESS, payload: response }),
    error => dispatch({ type: actionTypes.ADD_ERROR, payload: error })
  );
};

export const selectUser = id => ({
  type: actionTypes.SELECT,
  payload: id
});

export const deselectUser = id => ({
  type: actionTypes.DESELECT,
  payload: id
});
