import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import history from "../history";

const enhancer = composeWithDevTools(
  applyMiddleware(thunk, routerMiddleware(history))
);

const store = createStore(reducer, enhancer);

export default store;
