import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import PostContainer from 'containers/post/PostContainer';

/**
 * 포스트 페이지
 * /post/:id
 * @returns
 */
const PostPage = ({ match }) => {
  const { id } = match.params;
  return (
    <PageTemplate>
      <PostContainer id={id} />
    </PageTemplate>
  );
};

export default PostPage;
