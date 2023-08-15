import styles from './SearchButton.module.scss';

import { t } from 'i18next';
import { useEffect, useState } from 'react';

import searchButtonDark from './search-button-dark.svg';
import searchButtonWhite from './search-button-white.svg';

const SearchButton = ({ onClick }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true',
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDarkMode(localStorage.getItem('darkMode') === 'true');
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const backgroundImageStyle = darkMode
    ? { backgroundImage: `url(${searchButtonWhite})` }
    : { backgroundImage: `url(${searchButtonDark})` };

  return (
    <button
      onClick={onClick}
      className={styles.SearchButton}
      style={backgroundImageStyle}
      aria-label={t('Search')}
      title={t('Search')}
    ></button>
  );
};

export default SearchButton;
