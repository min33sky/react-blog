// 포스트 목록 모듈
import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import produce from 'immer';
import * as api from 'lib/api';

// action type
const GET_POST_LIST = 'list/GET_POST_LIST';

// action creators
export const getPostList = createAction(
  GET_POST_LIST,
  api.getPostList,
  meta => meta
);

// initialState
const initialState = {
  posts: [],
  lastPage: 0
};

// reducers
export default handleActions(
  {
    // 포스트 목록 가져오기
    ...pender({
      type: GET_POST_LIST,
      onSuccess: (state, action) =>
        produce(state, draft => {
          const { data: posts } = action.payload;
          const lastPage = action.payload.headers['last-page'];
          draft.posts = posts;
          draft.lastPage = parseInt(lastPage, 10);
        })
    })
  },
  initialState
);
