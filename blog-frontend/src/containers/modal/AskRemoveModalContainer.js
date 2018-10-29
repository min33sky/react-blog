import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import AskRemoveModal from 'components/modal/AskRemoveModal';
import * as baseActions from 'store/modules/base';
import * as postActions from 'store/modules/post';

/**
 * 삭제 모달 컨테이너
 *
 * @class AskRemoveModalContainer
 * @extends {Component}
 */
class AskRemoveModalContainer extends Component {
  // 취소 버튼 핸들러
  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('remove');
  };

  // 삭제 확인 핸들러
  handleConfirm = async () => {
    const { PostActions, BaseActions, history, match } = this.props;
    const { id } = match.params;

    try {
      // 포스트 삭제 후, 모달 닫고 웹 사이트로 이동
      await PostActions.removePost(id);
      BaseActions.hideModal('remove');
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { visible } = this.props;
    const { handleCancel, handleConfirm } = this;
    return (
      <AskRemoveModal
        visible={visible}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    );
  }
}

export default connect(
  state => ({
    visible: state.base.modal.remove
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(withRouter(AskRemoveModalContainer));
