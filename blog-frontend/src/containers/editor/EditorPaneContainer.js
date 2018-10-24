// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as editorActions from 'store/modules/editor';
import EditorPane from 'components/editor/EditorPane';

type Props = {
  title: string,
  markdown: string,
  tags: string
};

type InputProps = {
  name: string,
  value: string
};

/**
 * 포스트 작성 컴포넌트
 *
 * @class EditorPaneContainer
 * @extends {Component<Props>}
 */
class EditorPaneContainer extends Component<Props> {
  /**
   * 인풋 변경 핸들러
   *
   * @memberof EditorPaneContainer
   */
  handleChangeInput = ({ name, value }: InputProps) => {
    const { EditorActions } = this.props;
    EditorActions.changeInput({ name, value });
  };

  render() {
    const { title, markdown, tags } = this.props;
    const { handleChangeInput } = this;

    return (
      <EditorPane
        title={title}
        markdown={markdown}
        tags={tags}
        onChangeInput={handleChangeInput}
      />
    );
  }
}

export default connect(
  state => ({
    title: state.editor.title,
    markdown: state.editor.markdown,
    tags: state.editor.tags
  }),
  dispatch => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(EditorPaneContainer);
