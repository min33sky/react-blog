import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

/**
 * 전달받은 className, onClick 등 값들이 rest 안에 들어있다.
 * JSX에서 ...사용하면 내부에 있는 값들을 props로 넣어준다.
 * @param {*} { children, ...rest }
 */
const Div = ({ children, ...rest }) => <div {...rest}>{children}</div>;

/**
 * 버튼 컴포넌트
 * : 링크 버튼 & 일반 버튼
 * @param {*} { children, to, onClick, disabled, theme = 'default' }
 * @returns
 */
const Button = ({ children, to, onClick, disabled, theme = 'default' }) => {
  // to 값이 존재하면 Link를 사용하고, 아니면 div를 사용한다.
  // 비활성화되어 있는 버튼일 때도 div를 사용한다.
  const Element = to && !disabled ? Link : Div;

  // 비활성화하면 onClick은 실행되지 않는다.
  // disabled 값이 true가 되면 className에 disabled를 추가한다.
  return (
    <Element
      to={to}
      className={cx('button', theme, { disabled })}
      onClick={disabled ? () => null : onClick}
    >
      {children}
    </Element>
  );
};

export default Button;
