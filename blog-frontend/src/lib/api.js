// @flow

import axios from 'axios';
import queryString from 'query-string';

/**
 * 포스트 작성하기
 * @param {string} title
 * @param {string} body
 * @param {string} tags
 */
export const writePost = ({ title, body, tags }) =>
  axios.post('/api/posts', { title, body, tags });

/**
 * 포스트 읽기
 * @param {string} id
 */
export const getPost = (id: string) => axios.get(`/api/posts/${id}`);

/**
 * 포스트 목록 가져오기
 * @param {stging} tag 태그명
 * @param {number} page 페이지
 */
export const getPostList = ({ tag, page }) =>
  axios.get(`/api/posts/?${queryString.stringify({ tag, page })}`);

/**
 * 포스트 수정하기
 * @param {string} id
 * @param {string} title
 * @param {string} body
 * @param {string} tags
 */
export const editPost = ({ id, title, body, tags }) =>
  axios.patch(`/api/posts/${id}`, { title, body, tags });

/**
 * 포스트 삭제하기
 * @param {string} id 삭제할 아이디
 */
export const removePost = (id: string) => axios.delete(`/api/posts/${id}`);
