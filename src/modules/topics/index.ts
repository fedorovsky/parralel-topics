import { Reducer, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/reducer';

/**
 * Constants
 */
export const TOPIC_LIST_REQUEST = `@@topics/TOPIC_LIST_REQUEST`;
export const TOPIC_LIST_SUCCESS = `@@topics/TOPIC_LIST_SUCCESS`;
export const TOPIC_LIST_FAILURE = `@@topics/TOPIC_LIST_FAILURE`;
export const TOPIC_LIST_CLEAN = `@@topics/TOPIC_LIST_CLEAN`;

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
    case TOPIC_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TOPIC_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case TOPIC_LIST_CLEAN:
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
  type: typeof TOPIC_LIST_REQUEST;
}
interface TopicsListSuccess {
  type: typeof TOPIC_LIST_SUCCESS;
  payload: Topic[];
}
interface TopicsListClean {
  type: typeof TOPIC_LIST_CLEAN;
}
type ActionType = TopicsListRequest | TopicsListSuccess | TopicsListClean;

type FetchTopicList = ThunkAction<void, TopicsState, void, ActionType>;
export const fetchTopicList = (themeId: string): FetchTopicList => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch({
      type: TOPIC_LIST_CLEAN,
    });
    dispatch({
      type: TOPIC_LIST_REQUEST,
    });
    const topics = await fetch(
      `${process.env.PUBLIC_URL}/mock/topics/list-id-${themeId}.json`,
    ).then(res => res.json());
    dispatch({
      type: TOPIC_LIST_SUCCESS,
      payload: topics,
    });
  };
};

// https://gist.github.com/milankorsos/ffb9d32755db0304545f92b11f0e4beb
