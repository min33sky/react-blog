import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

/**
 * 헤더 컴포넌트
 */
const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('header-content')}>
        <div className={cx('brand')}>
          <Link to="/">MyBlog</Link>
        </div>
        <div className={cx('right')}>
          <Button theme="outline" to="/editor">
            새 포스트
          </Button>
          <Button theme="gray">테스트1</Button>
          <Button>테스트2</Button>
          <Button disabled>테스트2</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
