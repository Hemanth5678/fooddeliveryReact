import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import combineReducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import setAuthToken from "../../utils/setAuthToken";

const initialState = {};
// default state

const middlware = [thunk];

const store = createStore(
  combineReducers,
  initialState,
  //provide accessibility to middlware and redux devtools
  composeWithDevTools(applyMiddleware(...middlware))
);

let currentState = store.getState();
//to get currentstate

store.subscribe(() => {
  let previousState = currentState;
  currentState = store.getState();

  if (previousState.auth.accessToken !== currentState.auth.accessToken) {
    const accessToken = currentState.auth.accessToken;
    setAuthToken(accessToken);
  }
  //we compare the date from two states, based on that we take a call to update the token
});
//exp: export default
export default store;
