// @flow

// 마크다운 에디터 상태
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { pender } from 'redux-pender';

// action Types
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';

// action Creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(
  CHANGE_INPUT,
  (payload: { name: string, value: string }) => payload
);

// initial state
const initialState = {
  title: '',
  markdown: '',
  tags: ''
};

// reducer
export default handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) =>
      produce(state, draft => {
        const { name, value } = action.payload;
        draft[name] = value;
      })
  },
  initialState
);
