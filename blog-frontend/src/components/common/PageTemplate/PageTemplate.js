import React from 'react';
import styles from './PageTemplate.module.scss';
import classNames from 'classnames/bind';
import HeaderContainer from 'containers/common/HeaderContainer';
import Footer from 'components/common/Footer';

const cx = classNames.bind(styles);

/**
 * 페이지 템플릿
 * : 헤더, 메인 내용, 푸터
 * @param {*} { children }
 * @returns
 */
const PageTemplate = ({ children }) => {
  return (
    <div className={cx('page-template')}>
      <HeaderContainer />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageTemplate;
