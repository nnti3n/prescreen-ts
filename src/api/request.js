export function searchCity(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=name;numericCode`)
    .then(r => r.json())
    .then(r => {
      if (r.status) {
        return [{name: 'Not Found', numericCode: -1}]
      }
      return r
    })
    .catch(error => {
      console.error(error);
      return [];
    });
}
