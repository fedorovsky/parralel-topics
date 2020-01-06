import { Reducer } from 'redux';
import { createSelector } from 'reselect';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/reducer';

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
}
type ActionType = RegisterRequest | RegisterSuccess | RegisterFailure;

type ThunkResult<R> = ThunkAction<R, AuthState, void, ActionType>;

export const register = (data: {
  name: string;
  email: string;
  password: string;
}): ThunkResult<Promise<void>> => {
  return async dispatch => {
    dispatch({
      type: REGISTER_REQUEST,
    });
    const user = await fetch(`http://109.86.230.100:5000/auth/register`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json());
    console.log('REGISTER', user);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: user,
    });
  };
};

// https://gist.github.com/milankorsos/ffb9d32755db0304545f92b11f0e4beb
