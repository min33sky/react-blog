// 포스트 모듈
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

// action type
const GET_POST = 'post/GET_POST';

// action creators
export const getPost = createAction(GET_POST, api.getPost);

// initialState
const initialState = {
  post: {}
};

export default handleActions(
  {
    ...pender({
      type: GET_POST,
      onSuccess: (state, action) =>
        produce(state, draft => {
          if (!action.payload) return;
          const { data: post } = action.payload;
          draft.post = post;
        })
    })
  },
  initialState
);
