import { useEffect, useState } from 'react';
import styles from './ForecastModal.module.scss';

import DateSelection from '../../ui/date-selection/DateSelection';
import Modal from '../../ui/modal/Modal';
import Toggle from '../../ui/toggle/Toggle';

import { ForecastWeatherData } from '../../../utils/getForecastWeatherData';

import { t } from 'i18next';
import BroadView from '../BroadView/BroadView';
import Carousel from '../Carousel/Carousel';

const ForecastModal = ({ closeModal }) => {
  const {
    minDateWithoutTime,
    maxDateWithoutTime,
    hourlyData,
    icons,
    nowHours,

    dayTemperature,
    dayIcon,
    dayWindSpeed,
    dayConditions,
    dayDescription,
  } = ForecastWeatherData();

  const [broadMode, setBroadMode] = useState(
    localStorage.getItem('broadMode') === 'true',
  );

  const handleBroadMode = () => {
    setBroadMode(!broadMode);
    localStorage.setItem('broadMode', !broadMode);
  };

  const nowDate = localStorage.getItem('nowDate');

  const [selectedDate, setSelectedDate] = useState(
    localStorage.getItem('selectedDate') || nowDate,
  );

  useEffect(() => {
    localStorage.setItem('selectedDate', selectedDate);
  }, [selectedDate]);

  const handleDateChange = event => {
    setSelectedDate(event.target.value);
  };

  return (
    <Modal closeModal={closeModal}>
      <h2>{t('Select a date')}</h2>
      <DateSelection
        name="forecast-date"
        value={selectedDate}
        minDate={minDateWithoutTime}
        maxDate={maxDateWithoutTime}
        onChange={handleDateChange}
      />
      <Toggle
        checked={broadMode}
        onChange={handleBroadMode}
        className={styles.Toggle}
        // className="justify-end"
      />
      {broadMode ? (
        <BroadView
          dayTemperature={dayTemperature}
          dayIcon={dayIcon}
          dayWindSpeed={dayWindSpeed}
          dayConditions={dayConditions}
          dayDescription={dayDescription}
          icons={icons}
        />
      ) : (
        <Carousel hourlyData={hourlyData} icons={icons} nowHours={nowHours} />
      )}
    </Modal>
  );
};

export default ForecastModal;
