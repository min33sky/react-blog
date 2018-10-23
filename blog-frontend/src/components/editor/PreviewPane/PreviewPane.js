// @flow

import React from 'react';
import styles from './PreviewPane.module.scss';
import classNames from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender/MarkdownRender';

const cx = classNames.bind(styles);

type Props = {
  title: string,
  markdown: string
};

/**
 * 마크다운 프리뷰 컴포넌트
 *
 * @param {*} { title, markdown }
 * @returns
 */
const PreviewPane = ({ title, markdown }: Props) => {
  return (
    <div className={cx('preview-pane')}>
      <h1 className={cx('title')}>{title}</h1>
      <div>
        <MarkdownRender markdown={markdown} />
      </div>
    </div>
  );
};

export default PreviewPane;
