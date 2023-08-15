import axios from 'axios';
import LocationError from '../components/ui/Errors/location-error/LocationError';

const language = localStorage.getItem('i18nextLng');

const translateGeocodeToCity = async (lat, lon) => {
  try {
    const { data } = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=${language}`,
    );

    if (data) {
      const locationCity = data.address.city;
      const locationRegion = data.address.state;
      const locationCountry = data.address.country;

      const cityName =
        locationCity + ', ' + locationRegion + ', ' + locationCountry;
      localStorage.setItem('cityName', cityName);
    } else {
      return <LocationError />;
      // console.log(
      //   'Просим прощения, но ваша геолокация не была определена корректно, но мы работаем над этим!',
      // );
    }
  } catch (error) {
    console.error('Error fetching geocode:', error);
    throw error;
  }
};

export default translateGeocodeToCity;
