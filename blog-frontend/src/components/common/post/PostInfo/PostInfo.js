import React from 'react';
import styles from './PostInfo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PostInfo = () => {
  return (
    <div className={cx('post-info')}>
      <div className={cx('info')}>
        <h1>타이틀</h1>
        <div className={cx('tags')}>
          <a>#태그1</a>
          <a>#태그2</a>
          <a>#태그3</a>
        </div>
        <div className={cx('date')}>Oct 29, 2007</div>
      </div>
    </div>
  );
};

export default PostInfo;
