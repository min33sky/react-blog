// @flow
import React from 'react';
import styles from './EditorHeader.module.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

type Props = {
  onGoBack: () => void,
  onSubmit: () => void
};

/**
 * 에디터 헤더
 *
 * @param {Function} {onGoBack, onSubmit} 뒤로가기, 작성하기
 * @param {boolean} isEdit 포스트 수정 모드
 * @returns
 */
const EditorHeader = ({ onGoBack, onSubmit, isEdit }: Props) => {
  return (
    <div className={cx('editor-header')}>
      <div className={cx('back')}>
        <Button onClick={onGoBack} theme="outline">
          뒤로가기
        </Button>
      </div>
      <div className={cx('submit')}>
        <Button onClick={onSubmit} theme="outline">
          {isEdit ? '수정하기' : '작성하기'}
        </Button>
      </div>
    </div>
  );
};

export default EditorHeader;
