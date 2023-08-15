const language = localStorage.getItem('i18nextLng');

function isRussian(text) {
  const russianRegex = /[а-яА-ЯЁё]/;
  return russianRegex.test(text);
}

function isEnglish(text) {
  const englishRegex = /[a-zA-Z]/;
  return englishRegex.test(text);
}

export function CityName(city) {
  const { address } = city;
  const cityValues = [
    address.city,
    address.hamlet,
    address.suburb,
    address.town,
    address.village,
    address.allotments,
    address.place,
  ];

  const isLanguage = text => {
    if (language === 'en') {
      return isEnglish(text);
    } else if (language === 'ru') {
      return isRussian(text);
    } else {
      return isEnglish(text);
    }
  };

  const uniqueCityValues = new Set();

  let cityString = '';

  for (const value of cityValues) {
    if (
      value &&
      isLanguage(value) &&
      !uniqueCityValues.has(value) &&
      value !== address.state
    ) {
      cityString = value;
      uniqueCityValues.add(value);
      break;
    }
  }

  if (address.state && !uniqueCityValues.has(address.state)) {
    if (cityString) {
      cityString += ', ';
    }
    cityString += address.state;
  }

  if (cityString) {
    if (!uniqueCityValues.has(address.country) && isLanguage(address.country)) {
      cityString += ', ' + address.country;
    }
  } else {
    cityString = address.country;
  }

  return cityString;
}
