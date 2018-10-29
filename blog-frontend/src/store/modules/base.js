// 로그인, 모달 상태
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// action type
const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';

// action creators
export const showModal = createAction(SHOW_MODAL, modalName => modalName);
export const hideModal = createAction(HIDE_MODAL, modalName => modalName);

// initialState
const initialState = {
  // 모달의 가시성 상태
  modal: {
    remove: false,
    login: false
  }
};

// reducer
export default handleActions(
  {
    // 모달 보여주기
    [SHOW_MODAL]: (state, action) =>
      produce(state, draft => {
        const { payload: modalName } = action;
        draft.modal[modalName] = true;
      }),

    // 모달 숨기기
    [HIDE_MODAL]: (state, action) =>
      produce(state, draft => {
        const { payload: modalName } = action;
        draft.modal[modalName] = false;
      })
  },
  initialState
);
