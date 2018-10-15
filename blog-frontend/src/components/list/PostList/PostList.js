import React from 'react';
import styles from './PostList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * 포스트 미리보기 컴포넌트
 */
const PostItem = () => {
  return (
    <div className={cx('post-item')}>
      <h2>
        <a>타이틀</a>
      </h2>
      <div className={cx('date')}>2018-10-15</div>
      <p>내용</p>
      <div className={cx('tags')}>
        <a>#태그1</a>
        <a>#태그2</a>
        <a>#태그3</a>
      </div>
    </div>
  );
};

/**
 * 포스트 리스트 컴포넌트
 */
const PostList = () => {
  return (
    <div className={cx('post-list')}>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
};

export default PostList;
