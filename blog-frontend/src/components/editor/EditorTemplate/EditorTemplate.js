import React, { Component } from 'react';
import styles from './EditorTemplate.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * 에디터 페이지 템플릿
 */
class EditorTemplate extends Component {
  state = {
    leftPercentage: 0.5
  };

  // Separator 클릭 후 마우스를 움직이면 그에 따라 leftPercentage 업데이트
  handleMouseMove = e => {
    this.setState({
      leftPercentage: e.clientX / window.innerWidth
    });
  };

  // 마우스 땟을 때 등록한 이벤트 제거
  handleMouseUp = e => {
    document.body.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  };

  // Separator 클릭할 때
  handleSeparatorMouseDown = e => {
    document.body.addEventListener('mousemove', this.handleMouseMove); // DOM 클릭시 이벤트 등록
    window.addEventListener('mouseup', this.handleMouseUp); // 마우스 버튼을 땔 때 이벤트 등록
  };

  render() {
    const { header, editor, preview } = this.props;
    const { leftPercentage } = this.state;
    const { handleSeparatorMouseDown } = this;

    // 각 영역에 flex 값 적용
    const leftStyle = {
      flex: leftPercentage
    };

    const rightStyle = {
      flex: 1 - leftPercentage
    };

    // Separator 위치 설정
    const separatorStyle = {
      left: `${leftPercentage * 100}%`
    };

    return (
      <div className={cx('editor-template')}>
        {header}

        <div className={cx('panes')}>
          <div className={cx('pane', 'editor')} style={leftStyle}>
            {editor}
          </div>
          <div className={cx('pane', 'preview')} style={rightStyle}>
            {preview}
          </div>
          <div
            className={cx('separator')}
            style={separatorStyle}
            onMouseDown={handleSeparatorMouseDown}
          />
        </div>
      </div>
    );
  }
}

export default EditorTemplate;
