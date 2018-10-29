import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Header from 'components/common/Header';
import * as baseActions from 'store/modules/base';

/**
 * 헤더 컨테이너
 * : 일반적인 컴포넌트에서 사용하는 헤더
 * @class HeaderContainer
 * @extends {Component}
 */
class HeaderContainer extends Component {
  // 포스트 삭제
  handleRemove = () => {
    const { BaseActions } = this.props;
    BaseActions.showModal('remove');
  };

  render() {
    const { handleRemove } = this;
    // URL에서 해당 포스트의 id값을 가져온다.
    const { match } = this.props;
    const { id } = match.params;
    return <Header postId={id} onRemove={handleRemove} />;
  }
}

export default connect(
  state => ({}),
  dispatch => ({ BaseActions: bindActionCreators(baseActions, dispatch) })
)(withRouter(HeaderContainer));
