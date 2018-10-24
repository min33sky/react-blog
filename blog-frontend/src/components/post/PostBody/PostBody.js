import React from 'react';
import styles from './PostBody.module.scss';
import classNames from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender/MarkdownRender';

const cx = classNames.bind(styles);

/**
 * 포스트 내용 컴포넌트
 *
 * @param {*} { body }
 * @returns
 */
const PostBody = ({ body }) => {
  return (
    <div className={cx('post-body')}>
      <div className={cx('paper')}>
        <MarkdownRender markdown={body} />
      </div>
    </div>
  );
};

export default PostBody;
