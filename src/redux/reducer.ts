import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { themesReducer } from 'modules/themes';
import { topicsReducer } from 'modules/topics';
import { authReducer } from 'modules/auth';
import history from '../history';

export const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  themes: themesReducer,
  topics: topicsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
