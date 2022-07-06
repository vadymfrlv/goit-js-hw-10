import './css/styles.css';
import API from './js/fetchCountries';
import countryList from '../src/templates/countryList.hbs';
import countryInfo from '../src/templates/countryInfo.hbs';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('input'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

fetch('https://restcountries.com/v3.1/name/ukraine')
  .then(response => {
    if (!response.ok) {
      onFetchError();
      //! return Promise.reject(response.status);
      //! throw new Error(response.status); - посмтреть что работает и лучше
    }
    return response.json();
  })
  .then(country => {
    const countrymarkup = countryList(country);
    // console.log('countrymarkup', countrymarkup);
    const info = document.querySelector('.country-info');
    info.innerHTML = countrymarkup;
  });
