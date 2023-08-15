import { t } from 'i18next';
import { useEffect, useState } from 'react';
import styles from './SettingsButton.module.scss';

import settingsDark from './settingsDark.svg';
import settingsWhite from './settingsWhite.svg';

const SettingsButton = ({ openModal }) => {
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
    ? { backgroundImage: `url(${settingsWhite})` }
    : { backgroundImage: `url(${settingsDark})` };

  return (
    <button
      onClick={openModal}
      className={`${styles.SettingsButton} dark:bg-clear-black`}
      style={backgroundImageStyle}
      aria-label={t('Settings')}
    ></button>
  );
};

export default SettingsButton;
