import { useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';

import { t } from 'i18next';

import citySearch from '../../api/citySearch.js';
import translateCityToGeocode from '../../api/translateCityToGeocode';
import { CityName } from '../../utils/getCityName';

import NetworkError from '../ui/Errors/network-error/NetworkError.jsx';
import SearchButton from '../ui/search-button/SearchButton';
import SearchField from '../ui/search-field/SearchField';
import CitySuggestions from './CitySuggestions';

const SearchForm = () => {
  const [cityName, setCityName] = useState('');
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef(null);

  const savedCityName = localStorage.getItem('cityName');
  const geocodePosition = localStorage.getItem('geocodePosition');

  useEffect(() => {
    const getCities = async () => {
      if (cityName.length > 2) {
        try {
          const filteredCities = await citySearch(cityName);
          setCities(filteredCities);
        } catch (error) {
          console.error(error);
          setError(error);
        }
      }
    };

    getCities();
  }, [cityName]);

  useEffect(() => {
    if (savedCityName) {
      setCityName(savedCityName);
    }
  }, [geocodePosition, savedCityName]);

  const handleCitySelect = async city => {
    const fullCityName = CityName(city);
    setCityName(fullCityName);
    localStorage.setItem('cityName', fullCityName);
    await translateCityToGeocode(fullCityName);
    setShowSuggestions(false);
  };

  const handleCitySearch = async city => {
    setCityName(city);
    localStorage.setItem('cityName', city);
    await translateCityToGeocode(city);
  };

  const handleSearch = () => {
    if (cities.length > 0) {
      handleCitySelect(cities[0]);
    } else if (cityName.split(',').length >= 2) {
      handleCitySearch(cityName);
    }
  };

  const handleInputChange = e => {
    setCityName(e.target.value);
    setShowSuggestions(true);
  };

  const handleInputClick = () => {
    if (savedCityName === cityName) {
      setShowSuggestions(false);
    } else if (cityName.length > 2 && !error) {
      setShowSuggestions(true);
    }
  };

  const handleClickOutside = e => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.SearchForm} ref={containerRef}>
      {error && <NetworkError setError={setError} />}
      <SearchField
        value={cityName}
        onChange={handleInputChange}
        onClick={handleInputClick}
        placeholder={t('Enter city')}
      />
      <SearchButton onClick={handleSearch} />
      {showSuggestions && cityName.length > 2 && !error && (
        <CitySuggestions
          suggestions={cities || []}
          onSuggestionClick={handleCitySelect}
        />
      )}
    </div>
  );
};

export default SearchForm;
