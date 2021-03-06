import { Reducer } from 'redux';
import { createSelector } from 'reselect';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/reducer';
import { push, RouterAction } from 'connected-react-router';
import axios from 'axios';

/**
 * Constants
 */
export const REGISTER_REQUEST = `@@auth/REGISTER_REQUEST`;
export const REGISTER_SUCCESS = `@@auth/REGISTER_SUCCESS`;
export const REGISTER_FAILURE = `@@auth/REGISTER_FAILURE`;
export const LOGIN_REQUEST = `@@auth/LOGIN_REQUEST`;
export const LOGIN_SUCCESS = `@@auth/LOGIN_SUCCESS`;
export const LOGIN_FAILURE = `@@auth/LOGIN_FAILURE`;
export const LOGOUT = `@@auth/LOGOUT`;

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
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
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
export const getError = createSelector(stateSelector, state => state.error);

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
interface LoginRequest {
  type: typeof LOGIN_REQUEST;
}
interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}
interface LoginFailure {
  type: typeof LOGIN_FAILURE;
  payload: string;
}
interface Logout {
  type: typeof LOGOUT;
}
type ActionType =
  | RegisterRequest
  | RegisterSuccess
  | RegisterFailure
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | Logout
  | RouterAction;

type ThunkResult<R> = ThunkAction<R, AuthState, void, ActionType>;

const BASE_URL = `http://109.86.230.100:5000`;

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
      .post<User>(`${BASE_URL}/auth/register`, data)
      .then(response => {
        console.log('REGISTER', response.data);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        console.log('REGISTER ERROR', error.response.data);
        dispatch({
          type: REGISTER_FAILURE,
          payload: 'Register error',
        });
      });
  };
};

export const login = (data: {
  email: string;
  password: string;
}): ThunkResult<Promise<void>> => {
  return async dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
    });
    axios
      .post<User>(`${BASE_URL}/auth/login`, data)
      .then(response => {
        console.log('LOGIN', response.data);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });
        dispatch(push('/'));
      })
      .catch(error => {
        console.log('LOGIN ERROR', error.response.data);
        dispatch({
          type: LOGIN_FAILURE,
          payload: error.response.data.message,
        });
      });
  };
};

export const logout = (): ThunkResult<Promise<void>> => dispatch => {
  const promise = new Promise<void>(resolve =>
    setTimeout(() => resolve(), 300),
  );
  dispatch({ type: LOGOUT });
  dispatch(push('/'));
  return promise;
};

// https://gist.github.com/milankorsos/ffb9d32755db0304545f92b11f0e4beb
