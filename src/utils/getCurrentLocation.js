import translateGeocodeToCity from '../api/translateGeocodeToCity';

export async function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const geocodePosition = lat + ',' + lon;
          localStorage.setItem('geocodePosition', geocodePosition);
          translateGeocodeToCity(lat, lon);
          resolve();
        },
        error => {
          reject(new Error('Error getting current location.'));
        },
      );
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
}
