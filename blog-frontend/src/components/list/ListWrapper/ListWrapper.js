import React from 'react';
import styles from './ListWrapper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * 리스트 랩퍼 컴포넌트
 * @param {Array} children 자식 컴포넌트들
 */
const ListWrapper = ({ children }) => {
  return <div className={cx('list-wrapper')}>{children}</div>;
};

export default ListWrapper;
