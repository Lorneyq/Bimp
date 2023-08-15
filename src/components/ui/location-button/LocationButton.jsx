import styles from './LocationButton.module.scss';

import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { getCurrentLocation } from '../../../utils/getCurrentLocation';

import LocationError from '../Errors/location-error/LocationError';
import locationButtonDark from './location-button-dark.svg';
import locationButtonWhite from './location-button-white.svg';

const LocationButton = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true',
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDarkMode(localStorage.getItem('darkMode') === 'true');
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const backgroundImageStyle = darkMode
    ? { backgroundImage: `url(${locationButtonWhite})` }
    : { backgroundImage: `url(${locationButtonDark})` };

  const handleGetCurrentLocation = async () => {
    try {
      await getCurrentLocation();
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      {error && <LocationError setError={setError} />}
      <button
        onClick={handleGetCurrentLocation}
        className={`${styles.LocationButton} dark:bg-clear-black`}
        style={backgroundImageStyle}
        aria-label={t('Location Search')}
        title={t('Location Search')}
      ></button>
    </>
  );
};

export default LocationButton;
