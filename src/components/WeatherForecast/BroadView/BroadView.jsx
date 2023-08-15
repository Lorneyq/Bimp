import React from 'react';
import MetricUtils from '../../../utils/MetricUtils';
import styles from './BroadView.module.scss';

const BroadView = props => {
  const {
    dayTemperature,
    dayIcon,
    dayWindSpeed,
    dayConditions,
    dayDescription,
    icons,
  } = props;

  const { degrees, speed } = MetricUtils();

  return (
    <div
      className={`${styles.BroadView} dark:bg-white/20`}
      title={dayDescription}
    >
      <span className={styles.temperature}>
        {dayTemperature}
        {degrees}
      </span>
      <img src={icons?.[dayIcon]} alt={dayConditions} />
      <span className={styles.conditions}>{dayConditions}</span>
      <span className={styles.windSpeed}>
        {dayWindSpeed}
        {speed}
      </span>
    </div>
  );
};

export default BroadView;
