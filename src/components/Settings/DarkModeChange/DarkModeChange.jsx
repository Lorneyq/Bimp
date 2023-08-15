import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Toggle from '../../ui/toggle/Toggle';

const DarkModeChange = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true',
  );
  const { t } = useTranslation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Toggle
      checked={darkMode}
      onChange={handleThemeChange}
      checkName={t('On')}
      uncheckName={t('Off')}
      title={t('Dark Mode')}
      isCenter={true}
    />
  );
};

export default DarkModeChange;
