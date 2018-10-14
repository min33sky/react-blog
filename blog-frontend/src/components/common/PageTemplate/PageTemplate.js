import React from 'react';
import styles from './PageTemplate.module.scss';
import classNames from 'classnames/bind';
import Header from 'components/common/Header';
import Footer from '../Footer';

const cx = classNames.bind(styles);

/**
 * 페이지 템플릿
 * : 헤더, 메인 내용, 푸터
 */
const PageTemplate = ({ children }) => {
  return (
    <div className={cx('page-template')}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageTemplate;
