import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { suggestions } from './redux';

import { Input, Icon, SuggestionList, SuggestionItem } from './components';

import searchIcon from './icons/search.svg';
import closeIcon from './icons/close.svg';
import spinner from './icons/spinner.gif';

import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const { query, loading, items } = useSelector((state) => state);

  const resetVisible = query.length > 0;
  const suggestionsVisible = items.length > 0;

  const onChange = useCallback(
    (e) => {
      dispatch(suggestions.changeQuery(e.target.value));
    },
    [dispatch]
  );

  const onReset = useCallback(() => {
    dispatch(suggestions.changeQuery(''));
  }, [dispatch]);

  const onSelect = useCallback(
    (name) => {
      dispatch(suggestions.setQuery(name));
    },
    [dispatch]
  );

  return (
    <div className={styles.container}>
      <div className={styles.suggestions}>
        <Input
          value={query}
          onChange={onChange}
          placeholder="Поиск по магазину"
          leftIcon={<Icon src={searchIcon} left />}
          rightIcon={
            (resetVisible || loading) && (
              <Icon src={loading ? spinner : closeIcon} right clickable={!loading} onClick={onReset} />
            )
          }
        />
        <SuggestionList visible={suggestionsVisible}>
          {items.map((item) => (
            <SuggestionItem key={item.id} name={item.name} query={query} onSelect={onSelect} />
          ))}
        </SuggestionList>
      </div>
    </div>
  );
};

export default App;
