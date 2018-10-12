require("dotenv").config();

const Koa = require("koa");
const Router = require("koa-router");
const morgan = require("koa-morgan");
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");

const api = require("./api");

const { PORT: port = 4000, MONGO_URI: mongoURI } = process.env;

// 데이터베이스 설정
mongoose.Promise = global.Promise; // Node의 Promise를 사용한다.
mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connect to mongodb");
  })
  .catch(e => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();

// 로거 미들웨어 적용
app.use(morgan("dev"));

// 라우터 설정
router.use("/api", api.routes()); // api 라우트 적용

// 라우터 적용전에 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
