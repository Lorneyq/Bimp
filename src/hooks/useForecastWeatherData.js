import { useEffect, useState } from 'react';
import visualCrossingForecast from '../api/visualCrossingForecast';

const useForecastWeatherData = () => {
  const [forecastWeatherData, setForecastWeatherData] = useState({
    visualCrossingForecast: null,
  });
  const [geocodePosition, setGeocodePosition] = useState(
    localStorage.getItem('geocodePosition'),
  );
  const [selectedDate, setSelectedDate] = useState(
    localStorage.getItem('selectedDate'),
  );

  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng'));

  const [metric, setMetric] = useState(localStorage.getItem('metric'));

  useEffect(() => {
    async function fetchData() {
      try {
        let visualCrossingForecastData = null;
        if (selectedDate !== null) {
          visualCrossingForecastData = await visualCrossingForecast(
            geocodePosition,
            selectedDate,
            language,
            metric,
          );
        }

        setForecastWeatherData({
          visualCrossingForecast: visualCrossingForecastData,
        });
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, [geocodePosition, selectedDate, language, metric]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGeocodePosition(localStorage.getItem('geocodePosition'));
      setSelectedDate(localStorage.getItem('selectedDate'));
      setLanguage(localStorage.getItem('i18nextLng'));
      setMetric(localStorage.getItem('metric'));
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return forecastWeatherData;
};

export default useForecastWeatherData;
