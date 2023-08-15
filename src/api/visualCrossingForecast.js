import axios from 'axios';

const API_KEY = process.env.REACT_APP_VISUAL_CROSSING_FORECAST_API; //Special for Forecast Data

const visualCrossingForecast = async (
  geocodePosition,
  selectedDate,
  language,
  metric,
) => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${geocodePosition}/${selectedDate}?unitGroup=${metric}&lang=${language}&aggregateHours=24&key=${encodeURIComponent(
    API_KEY,
  )}&contentType=json`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export default visualCrossingForecast;
