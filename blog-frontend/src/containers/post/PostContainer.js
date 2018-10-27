import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import * as postActions from 'store/modules/post';

/**
 * 포스트 컨테이너
 *
 * @class PostContainer
 * @extends {Component}
 */
class PostContainer extends Component {
  /**
   * 포스트를 서버에서 가져온다
   */
  initialize = async () => {
    const { PostActions, id } = this.props;
    try {
      await PostActions.getPost(id);
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.initialize();
  }

  render() {
    const { loading, post } = this.props;

    /*
      TODO: 로딩중에 로딩 스피너 설정하자
    */
    if (loading) return <div>Loading....</div>; // 로딩 중일 때는 아무것도 보여주지 않음

    const { title, body, publishedDate, tags } = post;

    return (
      <div>
        <PostInfo title={title} publishedDate={publishedDate} tags={tags} />
        <PostBody body={body} />
      </div>
    );
  }
}

export default connect(
  state => ({
    post: state.post.post,
    loading: state.pender.pending['post/GET_POST'] // 로딩 상태
  }),
  dispatch => ({
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(PostContainer);
