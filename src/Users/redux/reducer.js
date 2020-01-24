import * as actionTypes from "./actionTypes";
import normalize from "./normalize";

const initialState = {
  data: {},
  ids: [],
  selected: [],
  requests: 0
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD: {
      return {
        ...state,
        requests: state.requests + 1
      };
    }

    case actionTypes.ADD_SUCCESS:
      const user = normalize(action.payload);

      return {
        ...state,
        data: {
          ...state.data,
          [user.id]: user
        },
        ids: [...state.ids, user.id],
        requests: state.requests - 1
      };

    case actionTypes.ADD_ERROR: {
      return {
        ...state,
        requests: state.requests - 1
      };
    }

    case actionTypes.SELECT:
      return {
        ...state,
        selected: [...state.selected, action.payload]
      };

    case actionTypes.DESELECT:
      return {
        ...state,
        selected: state.selected.filter(id => id !== action.payload)
      };

    default:
      return state;
  }
}
