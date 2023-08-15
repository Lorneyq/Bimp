import styles from './ForecastButton.module.scss';

import { t } from 'i18next';

import { useEffect, useState } from 'react';
import forecastButtonDark from './forecast-button-dark.svg';
import forecastButtonWhite from './forecast-button-white.svg';

const ForecastButton = ({ openModal }) => {
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
    ? { backgroundImage: `url(${forecastButtonWhite})` }
    : { backgroundImage: `url(${forecastButtonDark})` };

  return (
    <button
      onClick={openModal}
      className={`${styles.ForecastButton} + dark:bg-clear-black`}
      style={backgroundImageStyle}
      aria-label={t('Forecast')}
    ></button>
  );
};

export default ForecastButton;
