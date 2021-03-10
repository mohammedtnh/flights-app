import * as types from "../actions/actionTypes";

const initialState = {
  user: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload.updatedUser },
      };

    default:
      return state;
  }
};

export default reducer;
