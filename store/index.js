import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//Reducer and Actions
import reducer from "./reducers";
import { checkForToken } from "./actions/authActions";

const store = createStore(reducer, applyMiddleware(thunk));

//Fetchs in the app startup
store.dispatch(checkForToken());

export default store;
