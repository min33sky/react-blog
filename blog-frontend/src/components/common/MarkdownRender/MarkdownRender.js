// @flow

import React, { Component } from 'react';
import styles from './MarkdownRender.module.scss';
import classNames from 'classnames/bind';

import marked from 'marked'; // 마크다운 랜더링 모듈

// 마크다운에 색상 입히기
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
// 지원할 코드 형식들을 불러온다.
// http://prismjs.com/#languages-list 참조
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-css.min.js';

const cx = classNames.bind(styles);

type Props = {
  markdown: string
};

type MarkdownRenderState = {
  html: string
};

/**
 * 마크다운 렌더링 컴포넌트
 * : 에디터 & 포스트 읽기에서 렌더링된다.
 * @class MarkdownRender
 * @extends {Component}
 */
class MarkdownRender extends Component<Props, MarkdownRenderState> {
  state = {
    html: ''
  };

  constructor(props) {
    super(props);
    const { markdown } = props;
    // 서버사이드 랜더링에서도 마크다운 처리가 되도록 constructor 쪽에서도 구현한다.
    this.state = {
      html: markdown
        ? marked(props.markdown, { breaks: true, sanitize: true })
        : ''
    };
  }

  /**
   * 마크다운 렌더링하는 메서드
   *
   * @memberof MarkdownRender
   */
  renderMarkdown = () => {
    const { markdown } = this.props;
    // 마크다운이 존재하지 않느다면 공백 처리
    if (!markdown) {
      this.setState({
        html: ''
      });
      return;
    }

    this.setState({
      html: marked(markdown, {
        breaks: true, // 일반 엔터로 새 줄 입력
        sanitize: true // 마크다운 내부 html 무시
      })
    });
  };

  /**
   * 포스트를 읽을 때도 하이라이트를 적용하기 위해서
   *
   * @memberof MarkdownRender
   */
  componentDidMount() {
    Prism.highlightAll();
  }

  /**
   * 마크다운이 업데이트 될 때마다 하이라이트 적용
   *
   * @param {*} prevProps
   * @param {*} prevState
   * @memberof MarkdownRender
   */
  componentDidUpdate(prevProps, prevState) {
    // markdown 값이 변경되면 renderMarkdown을 호출한다.
    if (prevProps.markdown !== this.props.markdown) {
      this.renderMarkdown();
    }
    // state가 바뀌면(마크다운이 적용되면) 코드 하이라이팅을 적용한다.
    if (prevState.html !== this.state.html) {
      Prism.highlightAll();
    }
  }

  render() {
    const { html } = this.state;

    // React에서 html을 랜더링하려면 객체를 만들어 내부에 __html 값을 설정해야 한다.
    const markup = {
      __html: html
    };

    // 그리고 dangerouslySetInnerHTML 값에 해당 객체를 넣어준다.
    return (
      <div className={cx('markdown-render')} dangerouslySetInnerHTML={markup} />
    );
  }
}

export default MarkdownRender;
