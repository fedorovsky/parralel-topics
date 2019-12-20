import { createSelector } from 'reselect';

/**
 * Constants
 * */
export const MODULE_NAME = 'topics';

export const THEMES_REQUEST = `${MODULE_NAME}/themes/request`;
export const THEMES_SUCCESS = `${MODULE_NAME}/themes/success`;
export const THEMES_FAILURE = `${MODULE_NAME}/themes/failure`;

/**
 * Reducer
 * */
const initialState = {
  themes: [],
  loading: false,
  error: null,
};

export default (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case THEMES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case THEMES_SUCCESS:
      return {
        ...state,
        themes: payload,
        loading: false,
      };
    default:
      return state;
  }
};

/**
 * Selectors
 * */
export const stateSelector = (state: any) => state[MODULE_NAME];
export const themeListSelector = createSelector(
  stateSelector,
  state => state.themes,
);

/**
 * Action Creators
 * */
export const fetchThemes = () => (dispatch: any) => {
  dispatch({
    type: THEMES_REQUEST,
  });
  return fetch(`${process.env.PUBLIC_URL}/mock/themes.json`)
    .then(res => res.json())
    .then(themes => {
      dispatch({
        type: THEMES_SUCCESS,
        payload: themes,
      });
    });
};
