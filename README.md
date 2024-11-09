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

CountryData.overwrite([
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
]);

const countryName = CountryData.getName("US");
console.log(countryName); // "United States"

const countryCode = CountryData.getCode("Canada");
console.log(countryCode); //  "CA"

const countryNames = CountryData.getNames();
console.log(countryNames); //  [ "United States", "Canada" ]

const countryCodes = CountryData.getCodes();
console.log(countryCodes); //  [ "US", "CA" ]

const nameList = CountryData.getNameList();
console.log(nameList); //  { "United States": "US", "Canada": "CA" }

const codeList = CountryData.getCodeList();
console.log(codeList); //  { "US": "United States", "CA": "Canada" }

const countries = CountryData.getData();
console.log(countries);
//  [ { code: "US", name: "United States" }, { code: "CA", name: "Canada" } ]

const continentName = CountryData.getContinentName("AF");
console.log(continentName); //  "Africa"

const continentCodes = CountryData.getContinentCodes();
console.log(continentCodes); //  [ "AF", "AN", "AS", "EU", "NA", "OC", "SA" ]

const africanCountries = CountryData.getCountriesByContinent("AF");
console.log(africanCountries); //  [ "DZ", "AO", "BJ" ]

const continentCode = CountryData.getContinentByCountry("US");
console.log(continentCode); //  "NA" (North America)

const europeanCountries = CountryData.getCountriesByContinentName("Europe");
console.log(europeanCountries); //  [ "FR", "DE", "IT" ]

const asianCountryNames = CountryData.getCountryNamesByContinentName("Asia");
console.log(asianCountryNames); //  [ "China", "Japan", "India" ]

```

## Contributing
1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Open a pull request.

### License
This project is licensed under the MIT License. See the LICENSE file for details.
