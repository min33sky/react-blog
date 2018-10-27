import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button/Button';

const cx = classNames.bind(styles);

/**
 * 헤더 컴포넌트
 *
 * @param {*} { onRemove, postId }
 * @returns
 */
const Header = ({ onRemove, postId }) => {
  return (
    <header className={cx('header')}>
      <div className={cx('header-content')}>
        <div className={cx('brand')}>
          <Link to="/">MyBlog</Link>
        </div>
        <div className={cx('right')}>
          {// flex를 유지하기 위해 배열 형태로 랜더링한다.
            postId && [
              <Button key="edit" theme="outline" to={`/editor?id=${postId}`}>
              수정
              </Button>,
              <Button key="remove" theme="outline" onClick={onRemove}>
              삭제
              </Button>
            ]}
          <Button to={'/editor'} theme="outline">
            새 포스트
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
