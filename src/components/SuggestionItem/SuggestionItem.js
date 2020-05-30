import React from 'react';
import styles from './SuggestionItem.module.css';

const SuggestionItem = ({ name, query, onSelect }) => {
  const index = name.toLowerCase().indexOf(query.toLowerCase());
  if (index > -1) {
    const before = name.substr(0, index);
    const bold = name.substr(index, index + query.length);
    const after = name.substr(index + query.length, name.length);
    return (
      <li className={styles.container} onClick={() => onSelect(name)}>
        {before}
        <b className={styles.bold}>{bold}</b>
        {after}
      </li>
    );
  }
  return (
    <li className={styles.container} onClick={() => onSelect(name)}>
      {name}
    </li>
  );
};

export default SuggestionItem;
