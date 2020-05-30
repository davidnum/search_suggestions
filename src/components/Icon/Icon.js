import React from 'react';
import cn from 'classnames';
import styles from './Icon.module.css';

const Icon = ({ src, left, right, clickable, onClick, ...rest }) => (
  <img
    {...rest}
    onClick={clickable ? onClick : undefined}
    className={cn(styles.icon, {
      [styles.left]: left,
      [styles.right]: right,
      [styles.clickable]: clickable,
    })}
    src={src}
    alt="icon"
  />
);

export default Icon;
