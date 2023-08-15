import styles from './Wind.module.scss';

import { t } from 'i18next';

import MetricUtils from '../../../../utils/MetricUtils';

const Wind = props => {
  const { windDirectionName, windSpeed, windDirectionImage, windDegree } =
    props;

  const { speed } = MetricUtils();

  return (
    <div className={`${styles.Wind} dark:bg-clear-black`}>
      <div className="flex flex-col">
        <span className={styles.windDirectionName}>{windDirectionName}</span>
        <span className={styles.windSpeed} aria-label={t('Wind speed')}>
          {windSpeed}
          {speed}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <img
          className={styles.windDirectionImage}
          src={windDirectionImage}
          alt={t('Compass')}
        />
        <span className={styles.windDegree} aria-label={t('Wind direction')}>
          {windDegree}°
        </span>
      </div>
    </div>
  );
};

export default Wind;
