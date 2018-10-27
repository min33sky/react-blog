import React from 'react';
import styles from './PostList.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment'; // 시간 모듈
import removed from 'remove-markdown'; // 마크다운 제거

const cx = classNames.bind(styles);

/**
 * 포스트 미리보기
 *
 * @param {*} { id, title, body, tags, publishedDate }
 * @returns
 */
const PostItem = ({ id, title, body, tags, publishedDate }) => {
  // 태그 리스트
  const tagList = tags.map(tag => (
    <Link to={`/tag/${tag}`} key={tag}>
      #{tag}
    </Link>
  ));

  return (
    <div className={cx('post-item')}>
      <h2>
        <Link to={`/post/${id}`}>{title}</Link>
      </h2>
      <div className={cx('date')}>
        {moment(publishedDate).format('YYYY년 MM월 DD일')}
      </div>
      <p>{removed(body)}</p>
      <div className={cx('tags')}>{tagList}</div>
    </div>
  );
};

/**
 * 포스트 목록 컴포넌트
 *
 * @param {*} { posts } post 목록
 * @returns
 */
const PostList = ({ posts }) => {
  // 포스트 리스트
  const postList = posts.map(post => {
    const { _id, title, body, tags, publishedDate } = post;
    return (
      <PostItem
        key={_id}
        id={_id}
        title={title}
        body={body}
        tags={tags}
        publishedDate={publishedDate}
      />
    );
  });
  return <div className={cx('post-list')}>{postList}</div>;
};

export default PostList;
