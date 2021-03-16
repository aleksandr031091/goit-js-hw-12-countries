function fetchCountries(countries) {
  const url = `https://restcountries.eu/rest/v2/name/${countries}`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('not found');
  });
}

export default fetchCountries;
