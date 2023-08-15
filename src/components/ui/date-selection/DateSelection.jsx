import { useEffect, useState } from 'react';
import styles from './DateSelection.module.scss';

const DateSelection = ({ value, name, minDate, maxDate, onChange }) => {
  const [selectedColor, setSelectedColor] = useState(
    localStorage.getItem('selectedColor'),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedColor(localStorage.getItem('selectedColor'));
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <input
      className={`${styles.DateSelection} + dark:text-black`}
      id={name}
      type="date"
      value={value}
      name={name}
      min={minDate}
      max={maxDate}
      onChange={onChange}
      style={{ borderColor: selectedColor }}
    />
  );
};

export default DateSelection;
