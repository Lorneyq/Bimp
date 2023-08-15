import lottie from 'lottie-web';
import { useEffect, useRef, useState } from 'react';
import animationData from './atom-loader.json';

import styles from './Loader.module.scss';

import { t } from 'i18next';
import InformCard from '../inform-card/InformCard';

const Loader = () => {
  const containerRef = useRef(null);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true',
  );

  useEffect(() => {
    lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      animationData: animationData,
    });
  }, []);

  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => {
        if (prevDots.length >= 3) {
          return '';
        } else {
          return prevDots + '.';
        }
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDarkMode(localStorage.getItem('darkMode') === 'true');
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <InformCard isAbsolute={false}>
      <div
        ref={containerRef}
        className={`${styles.Animation} ${
          darkMode ? styles.AnimationWhite : styles.AnimationDark
        }`}
      />
      <span className={styles.Text}>
        {t('Loading')}
        {dots}
      </span>
    </InformCard>
  );
};

export default Loader;
