// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as editorActions from 'store/modules/editor';
import EditorHeader from 'components/editor/EditorHeader';

type Props = {
  title: string,
  markdown: string,
  tags: string,
  postId: string
};

/**
 * 에디터 헤더 컨테이너
 *
 * @class EditorHeaderContainer
 * @extends {Component}
 */
class EditorHeaderContainer extends Component<Props> {
  componentDidMount() {
    const { EditorActions } = this.props;
    EditorActions.initialize(); // 에디터를 초기화한다.
  }

  /**
   * 뒤로 가기
   *
   * @memberof EditorHeaderContainer
   */
  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  /**
   * 마크다운 에디터 작성
   *
   * @memberof EditorHeaderContainer
   */
  handleSubmit = async () => {
    const { title, markdown, tags, EditorActions, history } = this.props;
    const post = {
      title,
      body: markdown,
      // 태그 텍스트를 ,로 분리시키고 앞뒤 공백을 지운 후 중복되는 값을 제거한다.
      tags:
        tags === '' ? [] : [...new Set(tags.split(',').map(tag => tag.trim()))]
    };

    try {
      await EditorActions.writePost(post);
      // 페이지를 이동시킨다. 주의: postId는 위에서 래퍼런스를 만들지말고
      // 현재의 postId값을 조회한다.
      history.push(`/post/${this.props.postId}`);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { handleGoBack, handleSubmit } = this;
    return <EditorHeader onGoBack={handleGoBack} onSubmit={handleSubmit} />;
  }
}

export default connect(
  state => ({
    title: state.editor.title,
    markdown: state.editor.markdown,
    tags: state.editor.tags,
    postId: state.editor.postId
  }),
  dispatch => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(withRouter(EditorHeaderContainer));