// @flow

// 마크다운 에디터 상태
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

// action Types
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';
const WRITE_POST = 'editor/WRITE_POST';

// action Creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(
  CHANGE_INPUT,
  (payload: { name: string, value: string }) => payload
);
export const writePost = createAction(WRITE_POST, api.writePost);

// initial state
const initialState = {
  title: '',
  markdown: '',
  tags: '',
  postId: null
};

// reducer
export default handleActions(
  {
    // 초기화
    [INITIALIZE]: (state, action) => initialState,

    // 인풋 입력
    [CHANGE_INPUT]: (state, action) =>
      produce(state, draft => {
        const { name, value } = action.payload;
        draft[name] = value;
      }),

    // 포스트 작성
    ...pender({
      type: WRITE_POST,
      onSuccess: (state, action) =>
        produce(state, draft => {
          const { _id } = action.payload.data;
          draft.postId = _id;
        })
    })
  },
  initialState
);
