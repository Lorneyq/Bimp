import axios from 'axios';

let language = localStorage.getItem('i18nextLng');

window.addEventListener('storage', event => {
  if (event.key === 'i18nextLng') {
    language = event.newValue;
    citySearch();
  }
});

const citySearch = async cityName => {
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?format=json&city=${cityName}&addressdetails=1&accept-language=${
        language || 'en'
      }`,
    );

    const filteredCities = Array.isArray(response.data) ? response.data : [];
    console.log('Cities', filteredCities);
    return filteredCities;
  } catch (error) {
    throw error;
  }
};

export default citySearch;
