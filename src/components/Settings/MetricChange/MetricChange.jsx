import { t } from 'i18next';
import React, { useState } from 'react';
import SelectionButton from '../../ui/selection-button/SelectionButton';

import styles from '../SettingsModal/SettingsModal.module.scss';

const MetricChange = () => {
  const [activeMetric, setActiveMetric] = useState(
    localStorage.getItem('metric') || 'metric',
  );

  const setMetric = metric => {
    localStorage.setItem('metric', metric);
    setActiveMetric(metric);
  };

  return (
    <div>
      <h2 className={styles.Title}>{t('Units of measure')}</h2>
      <div className="flex justify-center">
        <SelectionButton
          name="°C"
          onClick={() => setMetric('metric')}
          active={activeMetric === 'metric'}
        />
        <SelectionButton
          name="°F"
          onClick={() => setMetric('us')}
          active={activeMetric === 'us'}
        />
        <SelectionButton
          name="°K"
          onClick={() => setMetric('base')}
          active={activeMetric === 'base'}
        />
      </div>
    </div>
  );
};

export default MetricChange;
