# country-info-data

This library helps in managing and retrieving continent and country information. This library provides methods to fetch details about continents, find countries by continent, and get detailed information for specific countries.

## Features

- Retrieve continent names from their codes.
- Get a list of all country codes in a specified continent.
- Look up the continent for a specific country.
- Get detailed information about a country, including its name, code, and continent.

## Installation

```js
npm i country-info-data
```

## Usage

```ts
import CountryData  from "country-info-data";

const continents = CountryData.getContinents();
console.log("Continents:", continents);

const europeanCountries = CountryData.getCountriesByContinent("EU");
console.log("Countries in Europe:", europeanCountries);

const continentForUS = CountryData.getContinentByCountry("US");
console.log("Continent for US:", continentForUS);

const japanDetails = CountryData.getCountryDetails("JP");
console.log("Details for Japan:", japanDetails);
```

## Contributing
1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Open a pull request.

### License
This project is licensed under the MIT License. See the LICENSE file for details.
