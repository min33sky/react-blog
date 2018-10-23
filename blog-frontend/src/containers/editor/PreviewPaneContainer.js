// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PreviewPane from 'components/editor/PreviewPane';

type Props = {
  title: string,
  markdown: string
};

/**
 * 마크다운 프리뷰 컨테이너
 *
 * @class PreviewPaneContainer
 * @extends {Component}
 */
class PreviewPaneContainer extends Component<Props> {
  render() {
    const { title, markdown } = this.props;
    return <PreviewPane title={title} markdown={markdown} />;
  }
}

export default connect(state => ({
  title: state.editor.title,
  markdown: state.editor.markdown
}))(PreviewPaneContainer);
