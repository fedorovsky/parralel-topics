import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import topicsReducer, { MODULE_NAME as topicsModule } from '../modules/topics';
import history from '../history';

export default combineReducers({
  router: connectRouter(history),
  [topicsModule]: topicsReducer,
});
