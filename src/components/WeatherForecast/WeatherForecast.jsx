import { useEffect, useState } from 'react';
import ForecastButton from '../ui/forecast-button/ForecastButton';
import BackgroundOverlay from '../ui/overlay/BackgroundOverlay';
import ForecastModal from './ForecastModal/ForecastModal';

const WeatherForecast = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const geocodePosition = localStorage.getItem('geocodePosition');

  useEffect(() => {
    setIsShow(geocodePosition !== null);
  }, [geocodePosition]);

  useEffect(() => {
    function handleStorageChange() {
      setIsShow(localStorage.getItem('geocodePosition'));
    }

    window.addEventListener('storage', handleStorageChange);

    const intervalId = setInterval(handleStorageChange, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(intervalId);
    };
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    isShow && (
      <>
        <ForecastButton openModal={isOpen ? closeModal : openModal} />
        {isOpen && (
          <>
            <ForecastModal closeModal={closeModal} />
            <BackgroundOverlay />
          </>
        )}
      </>
    )
  );
};

export default WeatherForecast;
