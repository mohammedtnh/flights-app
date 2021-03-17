import * as types from "../actions/actionTypes";

const initialState = {
  airports: [],
  loading: true,
};

const airportReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_AIRPORT:
      return { ...state, airports: action.payload, loading: false };
    default:
      return state;
  }
};

export default airportReducer;
