import useForecastWeatherData from '../hooks/useForecastWeatherData';

export const ForecastWeatherData = () => {
  const weatherData = useForecastWeatherData();

  if (!weatherData.visualCrossingForecast) {
    return { loading: true };
  }

  function removeSecondFromTime(time) {
    return time.slice(0, 5);
  }

  const hourlyData = weatherData?.visualCrossingForecast?.days?.[0]?.hours?.map(
    hourData => ({
      time: removeSecondFromTime(hourData.datetime),
      temperature: Math.round(hourData.temp),
      windSpeed: (hourData.windspeed * 1.6).toFixed(1),
      icon: hourData.icon,
      condition: hourData.conditions,
    }),
  );

  const dailyData = weatherData.visualCrossingForecast.days[0];

  const dayTemperature = Math.round(dailyData.temp);
  const dayIcon = dailyData.icon;
  const dayWindSpeed = dailyData.windspeed;
  const dayConditions = dailyData.conditions;
  const dayDescription = dailyData.description;

  const nowDate = localStorage.getItem('nowDate');
  const nowHours = localStorage.getItem('nowHours');

  const minDate = new Date(nowDate);
  minDate.setDate(minDate.getDate() - 3);
  const minDateString = minDate.toISOString();
  const minDateWithoutTime = minDateString.slice(0, -14);

  const maxDate = new Date(nowDate);
  maxDate.setDate(maxDate.getDate() + 7);
  const maxDateString = maxDate.toISOString();
  const maxDateWithoutTime = maxDateString.slice(0, -14);

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

  return {
    nowDate,
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
  };
};
