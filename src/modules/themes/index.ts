import { Reducer } from 'redux';
import { createSelector } from 'reselect';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/reducer';

/**
 * Constants
 */
export enum ACTION {
  LIST_REQUEST = '@@themes/LIST_REQUEST',
  LIST_SUCCESS = '@@themes/LIST_SUCCESS',
  LIST_FAILURE = '@@themes/LIST_FAILURE',
}

/**
 * Reducer
 */
export interface ThemeState {
  readonly list: Theme[];
  readonly loading: boolean;
  readonly error: string;
}
export interface Theme {
  id: number;
  title: string;
  description: string;
}
const initialState: ThemeState = {
  list: [],
  loading: false,
  error: '',
};
const reducer: Reducer<ThemeState, ActionType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ACTION.LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTION.LIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export { reducer as themesReducer };

/**
 * Selectors
 */
export const stateSelector = (state: RootState): ThemeState => state.themes;
export const themeListSelector = createSelector(
  stateSelector,
  state => state.list,
);

/**
 * Action Creators
 */
interface ThemesRequest {
  type: typeof ACTION.LIST_REQUEST;
}
interface ThemesSuccess {
  type: typeof ACTION.LIST_SUCCESS;
  payload: Theme[];
}
type ActionType = ThemesRequest | ThemesSuccess;

type ThunkResult<R> = ThunkAction<R, RootState, void, ActionType>;

const fetchPosts = (): ThunkResult<void> => {
  return async dispatch => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    dispatch({
      type: ACTION.LIST_REQUEST,
    });
    console.log('[POSTS]', posts);
  };
};

export const fetchThemeList = (): ThunkResult<void> => {
  return async dispatch => {
    dispatch(fetchPosts());
    dispatch({
      type: ACTION.LIST_REQUEST,
    });
    const themes = await fetch(
      `${process.env.PUBLIC_URL}/mock/themes.json`,
    ).then(res => res.json());
    dispatch({
      type: ACTION.LIST_SUCCESS,
      payload: themes,
    });
  };
};

// https://gist.github.com/milankorsos/ffb9d32755db0304545f92b11f0e4beb
