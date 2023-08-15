import { useEffect, useState } from 'react';
import { CurrentWeatherData } from '../../utils/getCurrentWeatherData';
import StartScreen from '../StartScreen/StartScreen.jsx';
import Loader from '../ui/loader/Loader';
import WeatherCard from './WeatherCard/WeatherCard';
import WeatherSubinfo from './WeatherSubinfo/WeatherSubinfo';

const CurrentWeather = () => {
  const {
    localTime,
    temperature,
    chanceRain,
    humidity,
    icon,
    icons,
    condition,

    sunset,
    sunrise,
    windDirectionName,
    windSpeed,
    windDirectionImage,
    windDegree,
    minTemperature,
    maxTemperature,
    feelTemperature,
    pressure,
  } = CurrentWeatherData();

  const [isLoading, setIsLoading] = useState(true);

  const cityName = localStorage.getItem('cityName');

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [cityName]);

  if (isLoading) {
    return <Loader />;
  } else if (cityName === null) {
    return <StartScreen />;
    // return <Loader />;
  } else if (icon !== undefined) {
    return (
      <>
        <WeatherCard
          icon={icon}
          icons={icons}
          localTime={localTime}
          temperature={temperature}
          chanceRain={chanceRain}
          humidity={humidity}
          condition={condition}
          cityName={cityName}
        />
        <WeatherSubinfo
          sunset={sunset}
          sunrise={sunrise}
          windDirectionName={windDirectionName}
          windSpeed={windSpeed}
          windDirectionImage={windDirectionImage}
          windDegree={windDegree}
          minTemperature={minTemperature}
          maxTemperature={maxTemperature}
          feelTemperature={feelTemperature}
          pressure={pressure}
          icon={icon}
        />
      </>
    );
  } else {
    return <Loader />;
  }
};

export default CurrentWeather;
