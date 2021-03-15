import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//Reducer and Actions
import reducer from "./reducers";
import { checkForToken } from "./actions/authActions";
import { fetchFlights } from "./actions/flightActions";
import { fetchAirports } from "./actions/airportActions";

const store = createStore(reducer, applyMiddleware(thunk));

//Fetchs in the app startup
store.dispatch(fetchFlights());
store.dispatch(checkForToken());
store.dispatch(fetchAirports());

export default store;
