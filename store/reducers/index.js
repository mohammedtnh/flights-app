import { combineReducers } from "redux";

//Reducers
import authReducer from "./authReducer";
import flightReducer from "./flightReducer";
import airportReducer from "./airportReducer";

const rootReducer = combineReducers({
  authReducer,
  flightReducer,
  airportReducer,
});

export default rootReducer;
