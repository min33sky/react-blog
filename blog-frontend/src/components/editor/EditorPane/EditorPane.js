// @flow

import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './EditorPane.module.scss';

const cx = classNames.bind(styles);

/**
 * 에디터 입력 컴포넌트
 *
 * @class EditorPane
 * @extends {Component}
 */
class EditorPane extends Component {
  render() {
    return (
      <div className={cx('editor-pane')}>
        <input
          className={cx('title')}
          placeholder="제목을 입력하세요"
          name="title"
        />
        <div className={cx('code-editor')} />
        <div className={cx('tags')}>
          <div className={cx('description')}>태그</div>
          <input name="tags" placeholder="태그를 입력하세요 (쉼표로 구분)" />
        </div>
      </div>
    );
  }
}

export default EditorPane;
