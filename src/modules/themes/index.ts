import { Reducer, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/reducer';

/**
 * Constants
 */
export const THEMES_REQUEST = `@@themes/THEMES_REQUEST`;
export const THEMES_SUCCESS = `@@themes/THEMES_SUCCESS`;
export const THEMES_FAILURE = `@@themes/THEMES_FAILURE`;

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
const reducer: Reducer<ThemeState> = (state = initialState, action) => {
  switch (action.type) {
    case THEMES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case THEMES_SUCCESS:
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
export const stateSelector = (state: RootState) => state.themes;
export const themeListSelector = createSelector(
  stateSelector,
  state => state.list,
);

/**
 * Action Creators
 */
interface ThemesRequest {
  type: typeof THEMES_REQUEST;
}
interface ThemesSuccess {
  type: typeof THEMES_SUCCESS;
  payload: Theme[];
}
type ActionType = ThemesRequest | ThemesSuccess;

type FetchThemeList = ThunkAction<void, ThemeState, void, ActionType>;
export const fetchThemeList = (): FetchThemeList => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch({
      type: THEMES_REQUEST,
    });
    const themes = await fetch(
      `${process.env.PUBLIC_URL}/mock/themes.json`,
    ).then(res => res.json());
    dispatch({
      type: THEMES_SUCCESS,
      payload: themes,
    });
  };
};

// https://gist.github.com/milankorsos/ffb9d32755db0304545f92b11f0e4beb
