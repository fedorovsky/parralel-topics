import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducer';
import history from 'utils/history';

const enhancer = composeWithDevTools(
  applyMiddleware(thunk, routerMiddleware(history)),
);

const store = createStore(rootReducer, enhancer);

export default store;
