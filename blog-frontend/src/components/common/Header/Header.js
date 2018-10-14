import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

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
          {/* w조건에 따라 버튼 랜더링 */}
          오른쪽
        </div>
      </div>
    </header>
  );
};

export default Header;
