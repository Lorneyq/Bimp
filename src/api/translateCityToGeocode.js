import axios from 'axios';
import LocationError from '../components/ui/Errors/location-error/LocationError';

const translateCityToGeocode = async fullCityName => {
  try {
    const { data } = await axios.get(
      `https://nominatim.openstreetmap.org/search?format=json&q=${fullCityName}`,
    );

    if (data.length > 0) {
      const { lat, lon } = data[0];
      const geocodePosition = lat + ',' + lon;
      localStorage.setItem('geocodePosition', geocodePosition);
    } else {
      return <LocationError />;
      // console.log(
      //   'Просим прощения, но данный н.п не был определён, но мы работаем над этиим!',
      // );
    }
  } catch (error) {
    console.error('Error fetching geocode:', error);
    throw error;
  }
};

export default translateCityToGeocode;
