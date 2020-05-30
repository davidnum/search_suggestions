import React from 'react';
import styles from './Input.module.css';

const Input = ({ leftIcon, rightIcon, ...rest }) => (
  <div className={styles.container}>
    {leftIcon}
    <input {...rest} className={styles.input} />
    {rightIcon}
  </div>
);

export default Input;
