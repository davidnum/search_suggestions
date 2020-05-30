import React from 'react';
import styles from './SuggestionList.module.css';

const SuggestionList = ({ children, visible }) =>
  visible ? (
    <div className={styles.container}>
      <ul>{children}</ul>
    </div>
  ) : null;

export default SuggestionList;
