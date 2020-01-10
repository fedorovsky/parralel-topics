import { Reducer } from 'redux';
import { createSelector } from 'reselect';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/reducer';
import axios from 'axios';

/**
 * Constants
 */
export const REGISTER_REQUEST = `@@auth/REGISTER_REQUEST`;
export const REGISTER_SUCCESS = `@@auth/REGISTER_SUCCESS`;
export const REGISTER_FAILURE = `@@auth/THEMES_FAILURE`;

/**
 * Reducer
 */
export interface AuthState {
  readonly user: User | null;
  readonly isLoading: boolean;
  readonly error: string;
}
export interface User {
  id: number;
  name: string;
  email: string;
}
const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: '',
};
const reducer: Reducer<AuthState> = (
  state = initialState,
  action: ActionType,
) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export { reducer as authReducer };

/**
 * Selectors
 */
export const stateSelector = (state: RootState): AuthState => state.auth;
export const isAuthorizedSelector = createSelector(
  stateSelector,
  state => !!state.user,
);

/**
 * Action Creators
 */
interface RegisterRequest {
  type: typeof REGISTER_REQUEST;
}
interface RegisterSuccess {
  type: typeof REGISTER_SUCCESS;
  payload: User;
}
interface RegisterFailure {
  type: typeof REGISTER_FAILURE;
  payload: string;
}
type ActionType = RegisterRequest | RegisterSuccess | RegisterFailure;

type ThunkResult<R> = ThunkAction<R, AuthState, void, ActionType>;

// 109.86.230.100
export const register = (data: {
  name: string;
  email: string;
  password: string;
}): ThunkResult<Promise<void>> => {
  return async dispatch => {
    dispatch({
      type: REGISTER_REQUEST,
    });
    axios
      .post<User>(`http://109.86.230.100:5000/auth/register`, data)
      .then(response => {
        console.log('REGISTER', response.data);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        console.log('ERROR REGISTER', error.response.data);
        dispatch({
          type: REGISTER_FAILURE,
          payload: error.response.data.message.name,
        });
      });
  };
};

// https://gist.github.com/milankorsos/ffb9d32755db0304545f92b11f0e4beb
