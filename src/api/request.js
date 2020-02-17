export async function searchCountries(name) {
  try {
    let rs = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=name;numericCode`);
    rs = await rs.json();
    if (rs.status === 404) {
      return [{name: 'Not Found', numericCode: -1}]
    }
    return rs;
  } catch (err) {
    console.error(err);
    return [];
  }
}
