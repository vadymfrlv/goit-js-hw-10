import './css/styles.css';
import API from './js/fetchCountries';
import countryList from '../src/templates/countryList.hbs';
import countryInfo from '../src/templates/countryInfo.hbs';
import { onFetchInfo, onFetchSuccess, onFetchError } from './js/notifications';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('input'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

const onFormSearch = e => {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';

  const searchQuery = refs.input.value.trim();

  if (!searchQuery) {
    return;
  }

  API.fetchCountries(searchQuery)
    .then(getCountry)
    .catch(error => {
      console.log(error);
    });
};

const getCountry = country => {
  if (country.length === 1) {
    renderCountryCard(country[0]);
    onFetchSuccess();
    return;
  } else if (country.length >= 2 && country.length <= 10) {
    renderCountryList(country);
    return;
  } else if (country.length > 10) {
    onFetchInfo();
    return;
  } else if (country.status === 404) {
    onFetchError();
    return;
  }
};

const renderCountryCard = country => {
  const markup = countryInfo(country);
  refs.countryInfo.insertAdjacentHTML('beforeend', markup);
};

const renderCountryList = country => {
  const markup = countryList(country);
  refs.countryList.insertAdjacentHTML('beforeend', markup);
};

refs.input.addEventListener('input', debounce(onFormSearch, DEBOUNCE_DELAY));
