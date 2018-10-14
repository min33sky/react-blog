import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

/**
 * 푸터 컴포넌트
 */
const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <Link to="/" className={cx('brand')}>
        MyBlog
      </Link>
      <div className={cx('admin-login')}>관리자 로그인</div>
    </footer>
  );
};

export default Footer;
