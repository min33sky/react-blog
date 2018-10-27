import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pagination from 'components/list/Pagination';
import PostList from 'components/list/PostList';
import * as listActions from 'store/modules/list';

/**
 * 포스트 목록 컨테이너
 *
 * @class ListContainer
 * @extends {Component}
 */
class ListContainer extends Component {
  /**
   * 포스트 목록을 가져오기
   *
   * @memberof ListContainer
   */
  getPostList = () => {
    // 페이지와 태그 값을 부모에게서 받아온다.
    const { ListActions, tag, page } = this.props;
    ListActions.getPostList({ tag, page });
  };

  componentDidMount() {
    this.getPostList();
  }

  componentDidUpdate(prevProps, prevState) {
    // 페이지/태그가 바뀔 때 리스트를 다시 불러온다.
    if (
      prevProps.page !== this.props.page ||
      prevProps.tag !== this.props.tag
    ) {
      this.getPostList();
      // 스크롤 바를 맨 위로 올린다.
      document.documentElement.scrollTop = 0;
    }
  }

  render() {
    const { posts, lastPage, tag, page, loading } = this.props;

    if (loading) return null; // 로딩중일 땐 아무것도 보여주지 않는다.

    return (
      <>
        <PostList posts={posts} />
        <Pagination lastPage={lastPage} tag={tag} page={page} />
      </>
    );
  }
}

export default connect(
  state => ({
    posts: state.list.posts,
    lastPage: state.list.lastPage,
    loading: state.pender.pending['list/GET_POST_LIST']
  }),
  dispatch => ({ ListActions: bindActionCreators(listActions, dispatch) })
)(ListContainer);
