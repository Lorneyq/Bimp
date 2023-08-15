import { useEffect } from 'react';

import styles from './Sun.module.scss';

import { t } from 'i18next';
import { useState } from 'react';
import sunTimelineDark from '../../../../assets/images/weather-icon/sun-timeline-dark.svg';
import sunTimelineWhite from '../../../../assets/images/weather-icon/sun-timeline-white.svg';

const Sun = props => {
  const { sunset, sunrise } = props;

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

  const backgroundImageStyle = darkMode ? sunTimelineWhite : sunTimelineDark;

  return (
    <div className={`${styles.Sun} dark:bg-clear-black`}>
      <img
        className={styles.sunTimeline}
        src={backgroundImageStyle}
        alt={t('Sun Timeline')}
      />
      <span className={styles.sunset} title={t('Sunset')}>
        {sunset}
        <img
          className="mt-1"
          src={
            require('../../../../assets/images/weather-icon/sunset.svg').default
          }
          alt={t('Sunset')}
        />
      </span>
      <span className={styles.sunrise} title={t('Sunrise')}>
        <img
          className="mb-1"
          src={
            require('../../../../assets/images/weather-icon/sunrise.svg')
              .default
          }
          alt={t('Sunrise')}
        />
        {sunrise}
      </span>
    </div>
  );
};

export default Sun;
