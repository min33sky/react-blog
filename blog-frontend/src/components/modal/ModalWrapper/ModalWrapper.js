import React, { Component } from 'react';
import styles from './ModalWrapper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * 모달 랩퍼
 *
 * @class ModalWrapper
 * @extends {Component}
 */
class ModalWrapper extends Component {
  state = {
    animate: false
  };

  /**
   * 애니메이션 시작
   *
   * @memberof ModalWrapper
   */
  startAnimation = () => {
    // animate 값을 true로 설정 후
    this.setState({
      animate: true
    });
    // 250ms 이후 다시 false로 설정
    setTimeout(() => {
      this.setState({
        animate: false
      });
    }, 250);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.visible !== this.props.visible) {
      this.startAnimation();
    }
  }

  render() {
    const { children, visible } = this.props;
    const { animate } = this.state;

    // 모달을 보여주지 않는다.
    if (!visible && !animate) return null;

    // 상태에 따라 애니메이션 설정
    const animation = animate && (visible ? 'enter' : 'leave');

    return (
      <div className={cx('gray-background', animation)}>
        <div className={cx('modal-wrapper')}>
          <div className={cx('modal', animation)}>{children}</div>
        </div>
      </div>
    );
  }
}

export default ModalWrapper;
