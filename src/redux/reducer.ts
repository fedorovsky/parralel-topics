import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { themesReducer, ThemeState } from '../modules/themes';
import { topicsReducer, TopicsState } from '../modules/topics';
import history from '../history';

// The top-level state object
export interface RootState {
  router: RouterState;
  themes: ThemeState;
  topics: TopicsState;
}

export default combineReducers({
  router: connectRouter(history),
  themes: themesReducer,
  topics: topicsReducer,
});
