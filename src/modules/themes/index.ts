import { Reducer } from 'redux';
import { createSelector } from 'reselect';
import { ThunkAction } from 'redux-thunk';
import { ApplicationState } from '../../redux/reducer';

/**
 * Constants
 * */

export const THEMES_REQUEST = `@@themes/themes/request`;
export const THEMES_SUCCESS = `@@themes/themes/success`;
export const THEMES_FAILURE = `@@themes/themes/failure`;

/**
 * Reducer
 * */
export interface ThemesState {
  readonly list: Theme[];
  readonly loading: boolean;
  readonly error: string;
}
export interface Theme {
  id: number;
  title: string;
  description: string;
}
const initialState: ThemesState = {
  list: [],
  loading: false,
  error: '',
};
const reducer: Reducer<ThemesState> = (state = initialState, action) => {
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
 * */
export const stateSelector = (state: ApplicationState) => state.themes;
export const themeListSelector = createSelector(
  stateSelector,
  state => state.list,
);

/**
 * Action Creators
 * */
interface ThemesRequest {
  type: typeof THEMES_REQUEST;
}

interface ThemesSuccess {
  type: typeof THEMES_SUCCESS;
  payload: Theme[];
}

export type ThemesActionTypes = ThemesRequest | ThemesSuccess;

const themesRequest = (): ThemesActionTypes => ({
  type: THEMES_REQUEST,
});

const themesSuccess = (themes: Theme[]): ThemesActionTypes => ({
  type: THEMES_SUCCESS,
  payload: themes,
});

type FetchThemes = ThunkAction<void, ThemesState, void, ThemesActionTypes>;
export const fetchThemes = (): FetchThemes => dispatch => {
  dispatch(themesRequest);
  return fetch(`${process.env.PUBLIC_URL}/mock/themes.json`)
    .then(res => res.json())
    .then(themes => {
      dispatch(themesSuccess(themes));
    });
};
