import { Reducer, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../redux/reducer';

/**
 * Constants
 */
export const TOPICS_LIST_REQUEST = `@@topics/TOPICS_LIST_REQUEST`;
export const TOPICS_LIST_SUCCESS = `@@topics/TOPICS_LIST_SUCCESS`;
export const TOPICS_LIST_FAILURE = `@@topics/TOPICS_LIST_FAILURE`;
export const TOPICS_LIST_CLEAN = `@@topics/TOPICS_LIST_CLEAN`;

/**
 * Reducer
 */
export interface TopicsState {
  readonly list: Topic[];
  readonly loading: boolean;
  readonly error: string;
}
export interface Topic {
  id: number;
  title: string;
  description: string;
}
const initialState: TopicsState = {
  list: [],
  loading: false,
  error: '',
};
const reducer: Reducer<TopicsState> = (state = initialState, action) => {
  switch (action.type) {
    case TOPICS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TOPICS_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case TOPICS_LIST_CLEAN:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
export { reducer as topicsReducer };

/**
 * Selectors
 */
export const stateSelector = (state: RootState) => state.topics;
export const topicListSelector = createSelector(
  stateSelector,
  state => state.list,
);

/**
 * Action Creators
 */
interface TopicsListRequest {
  type: typeof TOPICS_LIST_REQUEST;
}
interface TopicsListSuccess {
  type: typeof TOPICS_LIST_SUCCESS;
  payload: Topic[];
}
interface TopicsListClean {
  type: typeof TOPICS_LIST_CLEAN;
}
type ActionType = TopicsListRequest | TopicsListSuccess | TopicsListClean;

type FetchTopicList = ThunkAction<void, TopicsState, void, ActionType>;
export const fetchTopicList = (themeId: string): FetchTopicList => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch({
      type: TOPICS_LIST_CLEAN,
    });
    dispatch({
      type: TOPICS_LIST_REQUEST,
    });
    const topics = await fetch(
      `${process.env.PUBLIC_URL}/mock/topics/list-id-${themeId}.json`,
    ).then(res => res.json());
    dispatch({
      type: TOPICS_LIST_SUCCESS,
      payload: topics,
    });
  };
};

// https://gist.github.com/milankorsos/ffb9d32755db0304545f92b11f0e4beb
