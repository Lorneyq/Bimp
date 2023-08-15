import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_API;

const weatherApi = async (geocodePosition, language) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${encodeURIComponent(
    API_KEY,
  )}&q=${geocodePosition}&days=1&aqi=yes&alerts=yes&lang=${language}`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export default weatherApi;
