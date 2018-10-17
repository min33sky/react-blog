import React from 'react';
import styles from './PostBody.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * 포스트 내용
 */
const PostBody = () => {
  return (
    <div className={cx('post-body')}>
      <div className={cx('paper')}>내용</div>
    </div>
  );
};

export default PostBody;
