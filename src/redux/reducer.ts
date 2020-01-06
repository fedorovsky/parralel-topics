import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { themesReducer, ThemeState } from 'modules/themes';
import { topicsReducer, TopicsState } from 'modules/topics';
import { authReducer, AuthState } from 'modules/auth';
import history from '../history';

// The top-level state object
export interface RootState {
  router: RouterState;
  auth: AuthState;
  themes: ThemeState;
  topics: TopicsState;
}

export default combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  themes: themesReducer,
  topics: topicsReducer,
});
