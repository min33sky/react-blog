const Post = require("models/post");
const { ObjectId } = require("mongoose").Types;
const Joi = require("joi"); // 객체 검증 모듈

/**
 * objectID 검증 미들웨어
 */
exports.checkObjectId = (ctx, next) => {
  const { id } = ctx.params;

  // 검증 실패
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // 400 Bad Request
    return null;
  }

  return next(); // next를 리턴해야 ctx.body가 제대로 설정된다.
};

/**
 * 포스트 작성
 * POST /api/posts
 * { title, body, tags }
 */
exports.write = async ctx => {
  // 객체가 가진 값들을 검증
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array()
      .items(Joi.string())
      .required()
  });

  // 첫 번째 파라미터는 검증할 객체, 두 번째는 스키마
  const result = Joi.validate(ctx.request.body, schema);

  // 오류가 발생하면 오류 내용 응답
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  // --- 검증 완료 후 작업 ---------------------------------------

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
 * : 페이지네이션, 내용길이 제한
 * GET /api/posts
 */
exports.list = async ctx => {
  // page가 주어지지 않아다면 1로 간주
  // query는 문자열 형태로 받아오므로 숫자로 변환
  const page = parseInt(ctx.query.page || 1, 10);

  // 잘못된 페이지가 주어진다면 오류
  if (page < 1) {
    ctx.status = 400;
    return;
  }

  try {
    const posts = await Post.find()
      .sort({ _id: -1 }) // 역순 검색
      .limit(10) // 10개 제한
      .skip((page - 1) * 10)
      .lean() // JSON 형태로 조회
      .exec();

    const postCount = await Post.count().exec(); // count() : document 개수
    // 200자 이상은 ...처리
    const limitBodyLength = post => ({
      ...post,
      body: post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`
    });
    ctx.body = posts.map(limitBodyLength);
    // 마지막 페이지 알려주기
    // ctx.set은 response header 설정
    ctx.set("Last-Page", Math.ceil(postCount / 10));
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
