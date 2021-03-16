import debounce from 'lodash.debounce';
import fetchCountries from '../js/fetchCountries.js';
import countryMarkup from '../templates/contry.hbs';
import countrysMarkup from '../templates/contries.hbs';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core/dist/PNotify.js';

const refs = {
  input: document.querySelector('#imput'),
  listCountrys: document.querySelector('.list-country'),
};

refs.input.addEventListener('input', debounce(queryOnEveryInput, 500));

function queryOnEveryInput(e) {
  let queryInput = e.target.value;
  if (!queryInput) {
    refs.listCountrys.innerHTML = '';
    return;
  }
  fetchCountries(queryInput)
    .then(res => addCountryMarkup(res))
    .catch(err =>
      error({
        text: err.message,
      }),
    );
  console.log(queryInput);
}

function addCountryMarkup(countries) {
  console.log(countries);
  refs.listCountrys.innerHTML = '';
  if (countries.length === 1) {
    const markup = countryMarkup(countries);
    refs.listCountrys.insertAdjacentHTML('beforeend', markup);
  }
  if (countries.length >= 2 && countries.length <= 10) {
    const markup = countrysMarkup(countries);
    refs.listCountrys.insertAdjacentHTML('beforeend', markup);
  }
  if (countries.length > 10) {
    error({
      text: 'To many matches found.Please enter a more cpecificquery',
    });
  }
}
