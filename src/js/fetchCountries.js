function fetchCountries() {
  const url = 'https://restcountries.eu/rest/v2/all';

  return fetch(url).then(response => console.log(response));
}

export default fetchCountries;
