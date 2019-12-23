import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { themesReducer, ThemesState } from '../modules/themes';
import history from '../history';

// The top-level state object
export interface RootState {
  router: RouterState;
  themes: ThemesState;
}

export default combineReducers({
  router: connectRouter(history),
  themes: themesReducer,
});
