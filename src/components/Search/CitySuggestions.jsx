import { useEffect, useState } from 'react';
import { CityName } from '../../utils/getCityName';

import styles from './Search.module.scss';

import { useTranslation } from 'react-i18next';

const CitySuggestions = ({ suggestions, onSuggestionClick }) => {
  const [showNoResults, setShowNoResults] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (suggestions.length === 0) {
        setShowNoResults(true);
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [suggestions]);

  return (
    <ul className={styles.CitySuggestions}>
      {showNoResults ? (
        <li className={styles.notFound}>{t('Not Found')}</li>
      ) : (
        suggestions.map(city => (
          <li key={city.place_id} onClick={() => onSuggestionClick(city)}>
            {CityName(city)}
          </li>
        ))
      )}
    </ul>
  );
};

export default CitySuggestions;
