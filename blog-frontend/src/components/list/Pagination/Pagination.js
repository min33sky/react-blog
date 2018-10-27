import React from 'react';
import styles from './Pagination.module.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

/**
 * 페이지네이션 컴포넌트
 *
 * @param {*} { lastPage, page, tag }
 * @returns
 */
const Pagination = ({ lastPage, page, tag }) => {
  /*
    tag를 선택했을 시에는 태그 라우트를 사용하고
    tag를 선택하지 않았다면 페이지 라우트를 사용한다.
  */
  const createPagePath = page => {
    return tag ? `/tag/${tag}/${page}` : `/page/${page}`;
  };

  return (
    <div className={cx('pagination')}>
      <Button disabled={page === 1} to={createPagePath(page - 1)}>
        이전 페이지
      </Button>
      <div className={cx('number')}>페이지 {page}</div>
      <Button disabled={page === lastPage} to={createPagePath(page + 1)}>
        다음 페이지
      </Button>
    </div>
  );
};

export default Pagination;
