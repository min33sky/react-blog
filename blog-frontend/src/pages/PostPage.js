import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import PostInfo from 'components/common/post/PostInfo';
import PostBody from 'components/common/post/PostBody';

/**
 * 포스트 페이지
 */
const PostPage = () => {
  return (
    <PageTemplate>
      <PostInfo />
      <PostBody />
    </PageTemplate>
  );
};

export default PostPage;
