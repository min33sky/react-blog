import axios from 'axios';

// 포스트 작성
export const writePost = ({ title, body, tags }) =>
  axios.post('/api/posts', { title, body, tags });
