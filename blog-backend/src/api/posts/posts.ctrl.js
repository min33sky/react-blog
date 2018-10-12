const Post = require("models/post");

/**
 * 포스트 작성
 * POST /api/posts
 * { title, body, tags }
 */
exports.write = async ctx => {
  const { title, body, tags } = ctx.request.body;

  // 새 Post 인스턴스를 만든다.
  const post = new Post({
    title,
    body,
    tags
  });

  try {
    await post.save(); // 데이터베이스에 등록한다.
    ctx.body = post; // 저장된 결과를 반환한다.
  } catch (error) {
    // 데이터베이스에 오류 발생
    ctx.throw(error, 500);
  }
};

/**
 * 포스트 목록 가져오기
 * GET /api/posts
 */
exports.list = async ctx => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (error) {
    ctx.throw(error, 500);
  }
};

/**
 * 포스트 조회
 * GET /api/posts/:id
 */
exports.read = async ctx => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    // 포스트가 없을 때
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (error) {
    ctx.throw(error, 500);
  }
};

/**
 * 포스트 삭제
 * DELETE /api/posts/:id
 */
exports.remove = async ctx => {
  const { id } = ctx.params;

  try {
    await Post.findByIdAndDelete(id).exec();
    ctx.status = 204;
  } catch (error) {
    ctx.throw(error, 500);
  }
};

/**
 * 포스트 수정
 * PATCH /api/posts/:id
 */
exports.update = async ctx => {
  const { id } = ctx.params;

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true // 이 값을 설정해야 업데이트된 객체 반환
    }).exec();

    if (!post) {
      ctx.status = 404;
      return;
    }

    ctx.body = post;
  } catch (error) {
    ctx.throw(error, 500);
  }
};
