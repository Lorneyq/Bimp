import useCurrentWeatherData from '../hooks/useCurrentWeatherData';

export const CurrentWeatherData = () => {
  const weatherData = useCurrentWeatherData();

  if (!weatherData.weatherApi || !weatherData.visualCrossingCurrent) {
    return { loading: true };
  }

  const localTime = weatherData.weatherApi.location.localtime;
  const nowDate = localTime.slice(0, 10);
  localStorage.setItem('nowDate', nowDate);

  const nowHoursNumber = localTime.slice(11, 13);
  const nowHours =
    nowHoursNumber >= 10 ? localTime.slice(11, 13) : localTime.slice(11, 12);
  localStorage.setItem('nowHours', nowHours);

  const chanceRain =
    weatherData.weatherApi.forecast.forecastday[0].day.daily_chance_of_rain;

  const temperature = Math.round(
    weatherData.visualCrossingCurrent.currentConditions.temp,
  );
  const humidity = Math.round(
    weatherData.visualCrossingCurrent.currentConditions.humidity,
  );
  const icon = weatherData.visualCrossingCurrent.currentConditions.icon;
  const icons = {
    'clear-day': require('../assets/images/weather-conditions/clear.svg')
      .default,
    'clear-night': require('../assets/images/weather-conditions/clear.svg')
      .default,
    cloudy: require('../assets/images/weather-conditions/cloudy.svg').default,
    fog: require('../assets/images/weather-conditions/fog.svg').default,
    'partly-cloudy-day':
      require('../assets/images/weather-conditions/partly-cloudy.svg').default,
    'partly-cloudy-night':
      require('../assets/images/weather-conditions/partly-cloudy.svg').default,
    rain: require('../assets/images/weather-conditions/rain.svg').default,
    snow: require('../assets/images/weather-conditions/snow.svg').default,
    wind: require('../assets/images/weather-conditions/wind.svg').default,
  };
  const condition =
    weatherData.visualCrossingCurrent.currentConditions.conditions;

  const cityName = localStorage.getItem('cityName');

  const feelTemperature = Math.round(
    weatherData.visualCrossingCurrent.currentConditions.feelslike,
  );
  const minTemperature = Math.round(
    weatherData.visualCrossingCurrent.days[0].tempmin,
  );
  const maxTemperature = Math.round(
    weatherData.visualCrossingCurrent.days[0].tempmax,
  );
  const pressure = Math.round(
    weatherData.visualCrossingCurrent.currentConditions.pressure,
  );

  const windSpeed = (
    weatherData.visualCrossingCurrent.currentConditions.windspeed * 1.6
  ).toFixed(1);

  function removeSecondsFromSunTime(sunTime) {
    return sunTime.slice(0, 5);
  }
  const sunset = removeSecondsFromSunTime(
    weatherData.visualCrossingCurrent.days[0].sunset,
  );
  const sunrise = removeSecondsFromSunTime(
    weatherData.visualCrossingCurrent.days[0].sunrise,
  );

  const windDirection = weatherData.weatherApi.current.wind_dir;

  let windDirectionName;
  let windDirectionImage;

  switch (windDirection) {
    case 'N':
      windDirectionName = 'North';
      windDirectionImage =
        require('../assets/images/wind-direction/N.svg').default;
      break;
    case 'NNE':
    case 'NE':
    case 'ENE':
      windDirectionName = 'North-East';
      windDirectionImage =
        require('../assets/images/wind-direction/NE.svg').default;
      break;
    case 'NNW':
    case 'NW':
    case 'WNW':
      windDirectionName = 'North-West';
      windDirectionImage =
        require('../assets/images/wind-direction/NW.svg').default;
      break;
    case 'E':
      windDirectionName = 'East';
      windDirectionImage =
        require('../assets/images/wind-direction/E.svg').default;
      break;
    case 'S':
      windDirectionName = 'South';
      windDirectionImage =
        require('../assets/images/wind-direction/S.svg').default;
      break;
    case 'ESE':
    case 'SE':
    case 'SSE':
      windDirectionName = 'South-East';
      windDirectionImage =
        require('../assets/images/wind-direction/SE.svg').default;
      break;
    case 'SSW':
    case 'SW':
    case 'WSW':
      windDirectionName = 'South-West';
      windDirectionImage =
        require('../assets/images/wind-direction/SW.svg').default;
      break;
    case 'W':
      windDirectionName = 'West';
      windDirectionImage =
        require('../assets/images/wind-direction/W.svg').default;
      break;
    default:
      windDirectionName = 'Unknown name';
      windDirectionImage = null;
      break;
  }
  const windDegree = weatherData.weatherApi.current.wind_degree;

  return {
    localTime,
    temperature,
    chanceRain,
    humidity,
    icon,
    icons,
    condition,
    cityName,

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
  };
};
