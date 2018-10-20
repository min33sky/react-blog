import React from 'react';
import styles from './PreviewPane.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PreviewPane = () => {
  return (
    <div className={cx('preview-pane')}>
      <h1 className={cx('title')}>제목</h1>
      <div>내용</div>
    </div>
  );
};

export default PreviewPane;
