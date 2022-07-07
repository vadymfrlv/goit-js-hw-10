import { onFetchError } from './notifications';

const BASE_URL = 'https://restcountries.com/v3.1/';

// const search = new URLSearchParams({
//   name,
//   capital,
//   population,
//   flags,
//   languages,
// });

const fetchCountries = name => {
  return fetch(`${BASE_URL}name/${name}?fields=name,capital,population,flags,languages`).then(
    // return fetch(`${BASE_URL}name/${name}?fields=${search}`).then(
    response => {
      if (!response.ok) {
        onFetchError();
        throw new Error(response.status);
      }
      return response.json();
    }
  );
};

export default { fetchCountries };
