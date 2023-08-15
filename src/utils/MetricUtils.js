import { t } from 'i18next';
import { useEffect, useState } from 'react';

const MetricUtils = () => {
  const [metric, setMetric] = useState(localStorage.getItem('metric'));
  const [degrees, setDegrees] = useState('');
  const [speed, setSpeed] = useState('');

  useEffect(() => {
    function handleStorageChange() {
      setMetric(localStorage.getItem('metric'));
    }

    window.addEventListener('storage', handleStorageChange);

    const intervalId = setInterval(handleStorageChange, 500);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (metric === 'metric') {
      setDegrees('°C');
      setSpeed(t('km/h'));
    } else if (metric === 'us') {
      setDegrees('°F');
      setSpeed(t('mph'));
    } else if (metric === 'base') {
      setDegrees('°K');
      setSpeed(t('m/s'));
    }
  }, [metric]);

  return {
    degrees,
    speed,
  };
};

export default MetricUtils;
