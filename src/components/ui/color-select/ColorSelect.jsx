import React from 'react';
import { isColorDark } from '../../../utils/isColorDark.js';
import styles from './ColorSelect.module.scss';

const ColorSelect = ({ color, active }) => {
  const saveColor = () => {
    localStorage.setItem('selectedColor', color);
  };

  const isDark = isColorDark(color);
  const activeClass = active
    ? isDark
      ? `${styles.activeWhite} dark:border-white`
      : `${styles.activeDark} dark:border-white`
    : '';

  return (
    <div
      className={`${styles.ColorSelect} ${activeClass}`}
      style={{ backgroundColor: color }}
      onClick={saveColor}
    ></div>
  );
};

export default ColorSelect;
