import { onFetchError } from './notifications';

const BASE_URL = 'https://restcountries.com/v3.1/';

const fetchCountries = name => {
  return fetch(`${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`).then(
    response => {
      if (!response.ok) {
        onFetchError();
        //! return Promise.reject(response.status);
        //! throw new Error(response.status); - посмтреть что работает и лучше
      }
      return response.json();
    }
  );
};
