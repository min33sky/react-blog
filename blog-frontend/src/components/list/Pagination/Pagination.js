import React from 'react';
import styles from './Pagination.module.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

/**
 * 페이지네이션 컴포넌트
 */
const Pagination = () => {
  return (
    <div className={cx('pagination')}>
      <Button disabled>이전 페이지</Button>
      <div className={cx('number')}>페이지 1</div>
      <Button>다음 페이지</Button>
    </div>
  );
};

export default Pagination;
