import React, { Component } from 'react';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import * as postActions from 'store/modules/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * 포스트 컨테이너
 *
 * @class PostContainer
 * @extends {Component}
 */
class PostContainer extends Component {
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

    if (loading) return null; // 로딩 중일 때는 아무것도 보여주지 않음

    console.log('로딩: ', loading);
    console.log('타이틀 : ', post.title);

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
