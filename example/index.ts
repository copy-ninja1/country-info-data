import CountryInfoData from "../dist";

// Get country name by country code
const countryName = CountryInfoData.getCountryNameByCode("US");
console.log(countryName); // "United State"

//  Get country code by country name
const countryCode = CountryInfoData.getCountryCodeByName("Canada");
console.log(countryCode); // 'CA'

//  Get all country names
const allCountryNames = CountryInfoData.getAllCountryNames();
console.log(allCountryNames); // an array of all country names

// Get all country codes
const allCountryCodes = CountryInfoData.getAllCountryCodes();
console.log(allCountryCodes); // an array of all country codes

// Get all country details (code, name, continent, region)
const allCountryDetails = CountryInfoData.getAllCountryDetails();
console.log(allCountryDetails); // an array of country details including name, continent, and region

// Get continent name by continent code
const continentName = CountryInfoData.getContinentNameByCode("NA");
console.log(continentName); // 'North America'

//  Get all continent codes
const allContinentCodes = CountryInfoData.getAllContinentCodes();
console.log(allContinentCodes); // a list of all continent codes

// Get country codes by continent code
const countryCodesInEurope = CountryInfoData.getCountryCodesByContinent("EU");
console.log(countryCodesInEurope); // an array of country codes in Europe

// Get country names by continent name
const countryNamesInAfrica =
  CountryInfoData.getCountryNamesByContinentName("Africa");
console.log(countryNamesInAfrica); // an array of country names in Africa

// Get continent code by country code
const continentCode = CountryInfoData.getContinentCodeByCountryCode("US");
console.log(continentCode); // 'NA' (North America)

// Get country codes by continent name
const countryCodesInAsia =
  CountryInfoData.getCountryCodesByContinentName("Asia");
console.log(countryCodesInAsia); // an array of country codes in Asia

// Check if a country is in a specific continent
const isInAfrica = CountryInfoData.isCountryInContinent("NG", "AF");
console.log(isInAfrica); // true if Nigeria ('NG') is in Africa

// Search for countries by partial country name
const searchResult = CountryInfoData.searchCountriesByName("Can");
console.log(searchResult); // countries with names that include 'Can' (e.g., Canada, etc.)

// Get countries from multiple continents or regions
const countriesFromMultipleContinents =
  CountryInfoData.getCountriesFromMultipleContinentsOrRegions(
    ["NA", "EU"], // North America and Europe
    ["SoutheastAsia"] // Southeast Asia
  );
console.log(countriesFromMultipleContinents); // countries from North America, Europe, and Southeast Asia

// Get all continent data (countries in each continent)
const continentData = CountryInfoData.getAllContinentData();
console.log(continentData); // an object with continent names as keys and arrays of country names as values

// Get region code for a given country code
const regionForCountry = CountryInfoData.getRegionByCountryCode("US");
console.log(regionForCountry); // the region corresponding to 'US' (e.g., 'northAmericaMainland')

// Get region code by country name
const regionByCountryName = CountryInfoData.getRegionByCountryName("Kenya");
console.log(regionByCountryName); // Should print the region code corresponding to Kenya, e.g., 'EasternAfrica'

//  Get country names by region
const countryNamesByRegion =
  CountryInfoData.getCountryNamesByRegion("EasternAfrica");
console.log(countryNamesByRegion); // Should print a list of country names in the Eastern Africa region

// Get country codes by region
const countryCodesByRegion =
  CountryInfoData.getCountryCodesByRegion("SouthernAfrica");
console.log(countryCodesByRegion); // Should print an array of country codes in Southern Africa

// Update country data
const updatedCountries = [
  { code: "US", name: "United SA" }, // Example update for united state
  { code: "UG", name: "Uganda" }, // Example update for Uganda
];
CountryInfoData.updateCountryData(updatedCountries);

// Verify the update by checking the name of united state
const updatedCountryName = CountryInfoData.getCountryNameByCode("US");
console.log(updatedCountryName); // Should return  "United SA" after the update

const resultWithDetails = CountryInfoData.query()
  .continent(["AF", "AN"]) // North America continent
  .region("WesternAfrica")
  .withDetails() // Include continent and region details
  .execute(); // Execute the query

console.log(resultWithDetails);

//Get countries in Europe, excluding France and Germany, and only including countries with 'land' in their name
const search = CountryInfoData.query()
  .continent(["EU"])
  .excludeCountryName(["France", "Germany"])
  .countryName("lapolnd")
  .execute();

console.log(search);

// Get country details for countries in North America, sorted by name, and limit to the top 5 results
const limit = CountryInfoData.query()
  .continent(["AF"])
  .withDetails()
  .sortByName()
  .limit(5)
  .execute();

console.log(limit);

// Get only country names and continent codes for countries in South America, sorted by continent
const sortByContinent = CountryInfoData.query()
  .continent(["SA"])
  .selectFields(["name", "continent"])
  .sortByContinent()
  .execute();

console.log(sortByContinent);

// Get country details for countries in Africa, sorted by region, excluding certain countries, limiting the number of results to 3
const countries = CountryInfoData.query()
  .continent(["AF"])
  .excludeCountryName(["Nigeria"])
  .excludeCountryCode(["ZA"])
  .withDetails()
  .sortByRegion()
  .execute();

console.log({ countries });
