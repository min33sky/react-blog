const mongoose = require('mongoose');

const { Schema } = mongoose;

// 스키마 생성
const Post = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: new Date() // 현재 날짜를 기본값으로 지정
  }
});

// 모델 생성
module.exports = mongoose.model('post', Post);
