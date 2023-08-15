import { useEffect, useState } from 'react';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import SearchBox from './components/Search/SearchBox';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';

import { useTranslation } from 'react-i18next';
import Settings from './components/Settings/Settings';

import styles from './App.module.scss';

function App() {
  const { i18n } = useTranslation();
  const nowDate = localStorage.getItem('nowDate');

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  if (!localStorage.getItem('metric')) {
    localStorage.setItem('metric', 'metric');
  }

  if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
  }

  const [selectedDate, setSelectedDate] = useState(
    localStorage.getItem('selectedDate') || nowDate,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedDate(nowDate);
    }, 12 * 60 * 60 * 1000); // 12 hours

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const selectedColor = localStorage.getItem('selectedColor') || '#00acd5';

  document.body.style.backgroundColor = selectedColor;

  return (
    <div className={styles.App}>
      <div className={styles.Buttons}>
        <WeatherForecast />
        <Settings />
      </div>
      <SearchBox />
      <CurrentWeather />
    </div>
  );
}

export default App;
