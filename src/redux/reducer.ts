import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { themeReducer, ThemeState } from '../modules/themes';
import history from '../history';

// The top-level state object
export interface RootState {
  router: RouterState;
  theme: ThemeState;
}

export default combineReducers({
  router: connectRouter(history),
  theme: themeReducer,
});
