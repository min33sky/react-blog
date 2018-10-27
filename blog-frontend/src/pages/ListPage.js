import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import ListContainer from 'containers/list/ListContainer';

/**
 * 포스트 리스트 페이지
 * /page/:page
 * /tag/:tag/:page?
 * @returns
 */
const ListPage = ({ match }) => {
  // page의 기본 값을 1로 설정한다.
  const { page = 1, tag } = match.params;

  return (
    <PageTemplate>
      <ListWrapper>
        <ListContainer tag={tag} page={parseInt(page, 10)} />
      </ListWrapper>
    </PageTemplate>
  );
};

export default ListPage;
