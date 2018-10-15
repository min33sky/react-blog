import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import PostList from 'components/list/PostList/PostList';
import Pagination from 'components/list/Pagination';

/**
 * 포스트 목록 페이지
 */
const ListPage = () => {
  return (
    <PageTemplate>
      <ListWrapper>
        <PostList />
        <Pagination />
      </ListWrapper>
    </PageTemplate>
  );
};

export default ListPage;
