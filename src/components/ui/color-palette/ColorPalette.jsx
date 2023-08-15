import { useEffect, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

import { isColorDark } from '../../../utils/isColorDark.js';

import styles from './ColorPalette.module.scss';

const ColorPalette = () => {
  const [color, setColor] = useState(
    localStorage.getItem('selectedColor') || '#00acd5',
  );
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef();

  useEffect(() => {
    localStorage.setItem('selectedColor', color);
  }, [color]);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleClick = () => {
    setShowPicker(!showPicker);
  };

  const handleChange = newColor => {
    setColor(newColor);
  };

  const isDark = isColorDark(color);

  return (
    <div ref={pickerRef}>
      <button
        className={`${styles.ColorPalette} ${
          isDark ? styles.ColorPaletteWhite : styles.ColorPaletteDark
        }`}
        style={{ backgroundColor: color }}
        onClick={handleClick}
      ></button>

      {showPicker && (
        <HexColorPicker
          color={color}
          onChange={handleChange}
          className={styles.ColorPicker}
        />
      )}
    </div>
  );
};

export default ColorPalette;
