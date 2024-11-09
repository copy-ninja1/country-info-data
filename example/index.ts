import CountryData from "../dist";

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
