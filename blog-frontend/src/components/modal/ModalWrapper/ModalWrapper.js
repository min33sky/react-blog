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
  render() {
    const { children, visible } = this.props;
    if (!visible) return null; // 모달을 보여주지 않는다.

    return (
      <div className={cx('gray-background')}>
        <div className={cx('modal-wrapper')}>
          <div className={cx('modal')}>{children}</div>
        </div>
      </div>
    );
  }
}

export default ModalWrapper;
