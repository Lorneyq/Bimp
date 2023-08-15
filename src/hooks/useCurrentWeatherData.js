import { useEffect, useState } from 'react';
import visualCrossingCurrent from '../api/visualCrossingCurrent';
import weatherApi from '../api/weatherApi';

const useCurrentWeatherData = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState({
    weatherApi: null,
    visualCrossingCurrent: null,
  });
  const [geocodePosition, setGeocodePosition] = useState(
    localStorage.getItem('geocodePosition'),
  );

  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng'));

  const [metric, setMetric] = useState(localStorage.getItem('metric'));

  useEffect(() => {
    async function fetchData() {
      try {
        const weatherApiData = await weatherApi(geocodePosition, language);
        const visualCrossingCurrentData = await visualCrossingCurrent(
          geocodePosition,
          language,
          metric,
        );

        setCurrentWeatherData({
          weatherApi: weatherApiData,
          visualCrossingCurrent: visualCrossingCurrentData,
        });
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, [geocodePosition, language, metric]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGeocodePosition(localStorage.getItem('geocodePosition'));
      setLanguage(localStorage.getItem('i18nextLng'));
      setMetric(localStorage.getItem('metric'));
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return currentWeatherData;
};

export default useCurrentWeatherData;
