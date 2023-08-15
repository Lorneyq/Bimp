import styles from './WeatherCard.module.scss';

import { t } from 'i18next';
import Card from '../../ui/card/Card';

import { useEffect, useState } from 'react';
import MetricUtils from '../../../utils/MetricUtils';

import humidityDark from '../../../assets/images/weather-icon/humidity-dark.svg';
import humidityWhite from '../../../assets/images/weather-icon/humidity-white.svg';

const WeatherCard = props => {
  const {
    icon,
    icons,
    localTime,
    temperature,
    chanceRain,
    humidity,
    condition,
    cityName,
  } = props;

  const { degrees } = MetricUtils();

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

  const backgroundImageStyle = darkMode ? humidityWhite : humidityDark;

  if (icon !== undefined) {
    return (
      <Card>
        <p className={styles.localTime}>{localTime}</p>
        <div className="flex justify-between">
          <div
            className={styles.chanceRain}
            aria-label={t('Chance Rain')}
            title={t('Chance Rain')}
          >
            <img
              src={
                require('../../../assets/images/weather-icon/chance-rain.svg')
                  .default
              }
              alt={t('Chance Rain')}
            />
            {chanceRain}%
          </div>
          <div
            className={styles.humidity}
            aria-label={t('Humidity')}
            title={t('Humidity')}
          >
            <span>{humidity}</span>
            <img
              src={backgroundImageStyle}
              alt={t('Humidity')}
              aria-label="%"
            />
          </div>
        </div>
        <div className="relative -top-5">
          <img className={styles.icon} src={icons[icon]} alt={condition} />
          <span className={styles.temperature} aria-label={t('Temperature')}>
            {temperature}
            {degrees}
          </span>
        </div>
        <span className={styles.condition} aria-label={t('Condition')}>
          {condition}
        </span>
        <span className={styles.cityName} aria-label={t('City')}>
          {cityName}
        </span>
      </Card>
    );
  }
};

export default WeatherCard;
