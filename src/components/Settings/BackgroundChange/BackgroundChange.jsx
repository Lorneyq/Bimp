import { t } from 'i18next';
import { useEffect, useState } from 'react';
import ColorPalette from '../../ui/color-palette/ColorPalette';
import ColorSelect from '../../ui/color-select/ColorSelect';

import styles from '../SettingsModal/SettingsModal.module.scss';

const BackgroundChange = () => {
  const [selectedColor, setSelectedColor] = useState(
    localStorage.getItem('selectedColor'),
  );

  useEffect(() => {
    document.body.style.backgroundColor = selectedColor;
  }, [selectedColor]);

  useEffect(() => {
    function handleStorageChange() {
      setSelectedColor(localStorage.getItem('selectedColor'));
    }

    window.addEventListener('storage', handleStorageChange);

    const intervalId = setInterval(handleStorageChange, 100);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(intervalId);
    };
  }, []);

  const handleColorSelect = color => {
    setSelectedColor(color);
    localStorage.setItem('selectedColor', color);
  };

  return (
    <div>
      <h2 className={styles.Title}>{t('Change background')}</h2>
      <div className="flex justify-between">
        <ColorSelect
          color="#00acd5"
          onSelect={handleColorSelect}
          active={selectedColor === '#00acd5'}
        />
        <ColorSelect
          color="#7fffd4"
          onSelect={handleColorSelect}
          active={selectedColor === '#7fffd4'}
        />
        <ColorSelect
          color="#965CED"
          onSelect={handleColorSelect}
          active={selectedColor === '#965CED'}
        />
        <ColorSelect
          color="#ffa400"
          onSelect={handleColorSelect}
          active={selectedColor === '#ffa400'}
        />
        <ColorPalette onSelect={handleColorSelect} />
      </div>
    </div>
  );
};

export default BackgroundChange;
