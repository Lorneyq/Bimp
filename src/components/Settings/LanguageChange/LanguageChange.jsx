import i18next, { t } from 'i18next';
import { useEffect, useState } from 'react';
import Toggle from '../../ui/toggle/Toggle';

const LanguageChange = () => {
  const changeLanguage = language => i18next.changeLanguage(language);

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem('i18nextLng');
    if (savedState === 'ru') {
      setEnabled(true);
    }
  }, []);

  const handleToggle = () => {
    setEnabled(!enabled);
    if (enabled) {
      changeLanguage('en');
    } else {
      changeLanguage('ru');
    }
  };

  return (
    <Toggle
      checked={enabled}
      onChange={handleToggle}
      checkName="Русский"
      uncheckName="English"
      title={t('Language')}
      isCenter={true}
    />
  );
};

export default LanguageChange;
