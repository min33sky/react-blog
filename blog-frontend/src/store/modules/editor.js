// @flow

// 마크다운 에디터 모듈
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

// action Types
const INITIALIZE = 'editor/INITIALIZE'; // 초기화
const CHANGE_INPUT = 'editor/CHANGE_INPUT'; // 인풋 변경
const WRITE_POST = 'editor/WRITE_POST'; // 포스트 작성
const GET_POST = 'editor/GET_POST'; // 수정할 포스트 가져오기
const EDIT_POST = 'editor/EDIT_POST'; // 포스트 수정하기

// action Creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(
  CHANGE_INPUT,
  (payload: { name: string, value: string }) => payload
);
export const writePost = createAction(WRITE_POST, api.writePost);
export const getPost = createAction(GET_POST, api.getPost);
export const editPost = createAction(EDIT_POST, api.editPost);

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
    }),

    // 기존 포스트 읽어오기 (포스트 수정 전용)
    ...pender({
      type: GET_POST,
      onSuccess: (state, action) =>
        produce(state, draft => {
          const { title, body, tags } = action.payload.data;
          draft.title = title;
          draft.markdown = body;
          draft.tags = tags.join(', '); // 배열을 문자열로 변환
        })
    })
  },
  initialState
);
