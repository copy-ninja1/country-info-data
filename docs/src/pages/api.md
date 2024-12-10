---
title: API Reference
---

# 🤖 API Reference


Welcome to the **API Reference** for Country-Info-Data! This page provides detailed information about the available methods, functions, and parameters that you can use to interact with the library. Whether you're looking to fetch country data, filter results by continent, or perform advanced queries, you'll find all the necessary details here to help you integrate and use Country-Info-Data effectively in your projects.

Explore the reference to discover how to leverage the full power of CountryData’s capabilities, with clear examples and explanations for each API method.


:::tip

Always ensure you import the library in your files to use its features:

```typescript
import CountryData from "country-info-data";
```
:::




## Methods


### `findCountryDetailsByLocation`

This method allows you to retrieve information about countries based on a given location . The location can be a continent name, region name, country name, or country code.

#### Usage Example

```typescript
CountryInfoData.findCountryDetailsByLocation(location: string): CountryDetails[]
```


### `query()`

The `query()` method starts a new country info query and returns a new `CountryInfoQuery` instance.

#### Usage Example

```typescript
const query = CountryData.query();
```



### `updateCountryData(countries: CountryDetails[])`

This method allows you to update country information with the latest and most accurate details available.


#### Usage Example

```typescript
CountryData.updateCountryData([
  {
    code: "US",
    name: "United States",
    continent: { name: "North America", code: "NA" },
    region: "NorthAmericaMainland",
  },
]);
```


### `getCountryNameByCode(countryCode: CountryCode)`

This method retrieves the country name using its country code and returns the name if found, or `undefined` if the country code is not recognized.


#### Usage Example


```typescript
const countryName = CountryData.getCountryNameByCode("US");
console.log(countryName); // "United States"
```


### `getCountryCodeByName(name: string)`

This method retrieves the country code using its country name and returns the code if found, or `undefined` if the country name is not recognized.

#### Usage Example

```typescript
const countryCode = CountryData.getCountryCodeByName("United States");
console.log(countryCode); // "US"
```


### `getAllCountryNames()`

This method retrieves a list of all country names.


#### Usage Example


```typescript
const countryNames = CountryData.getAllCountryNames();
console.log(countryNames); // ["United States", "Canada", "Mexico", ...]
```


### `getAllCountryCodes()`

This method retrieves a list of all country codes.


#### Usage Example

```typescript
const countryCodes = CountryData.getAllCountryCodes();
console.log(countryCodes); // ["US", "CA", "MX", ...]
```


### `getAllCountryDetails()`

This method retrieves a list of all country details, including the country code, name, continent, and region.

#### Usage Example

```typescript
const countryDetails = CountryData.getAllCountryDetails();
console.log(countryDetails);
```



### `getContinentNameByCode(code: ContinentCode)`


Retrieves the continent name by its continent code and returns the continent name or undefined if not found.


#### Usage Example

```typescript
const continentName = CountryData.getContinentNameByCode("NA");
console.log(continentName); // "North America"
```



### `getAllContinentCodes()`

This method retrieves a list of all continent codes.


#### Usage Example


```typescript
const continentCodes = CountryData.getAllContinentCodes();
console.log(continentCodes); // ["AF", "AN", "AS", "EU", "NA", "OC", "SA"]
```


### `getCountryCodesByContinent(continentCode: ContinentCode)`

This method retrieves a list of country codes for a specified continent code.


#### Usage Example


```typescript
const countryCodesInAfrica = CountryData.getCountryCodesByContinent("AF");
console.log(countryCodesInAfrica); // ["DZ", "EG", "MA", ...]
```



### `getContinentCodeByCountryCode(countryCode: CountryCode)`

This method retrieves the continent code for a specified country code.

#### Usage Example


```typescript
const continentCode = CountryData.getContinentCodeByCountryCode("US");
console.log(continentCode); // "NA"
```


### `getCountryCodesByContinentName(continentName: ContinentName)`

Retrieves a list of country codes for a given continent name.


#### Usage Example

```typescript
const countryCodesInNorthAmerica =
  CountryData.getCountryCodesByContinentName("North America");
console.log(countryCodesInNorthAmerica); // ["US", "CA", "MX"]
```


### `getCountryNamesByContinentName(continentName: ContinentName)`

Retrieves a list of country names for a given continent name.


#### Usage Example

```typescript
const countryNamesInAfrica =
  CountryData.getCountryNamesByContinentName("Africa");
console.log(countryNamesInAfrica); // ["Algeria", "Egypt", "Morocco", ...]
```

### `getRegionByContinent(continentCode: ContinentCode)`

Retrieves a list of region codes associated with a given continent code.

#### Usage Example


```typescript
const regionsInAsia = CountryData.getRegionByContinent("AS");
console.log(regionsInAsia); // ["EastAsia", "SouthAsia", "SoutheastAsia", ...]
```

### `getRegionByCountryCode(countryCode: CountryCode)`

This method retrieves the region code for a specified country code.


#### Usage Example


```typescript
const regionCode = CountryData.getRegionByCountryCode("US");
console.log(regionCode); // "NorthAmericaMainland"
```

### `searchCountriesByName(partialName: string)`

This method searches for countries by a partial country name and returns an array of country names that match the search.


#### Usage Example


```typescript
const countries = CountryData.searchCountriesByName("Unite");
console.log(countries); // ["United States", "United Kingdom", ...]
```


### `getCountriesFromMultipleContinentsOrRegions(continentCodes: ContinentCode[], regionCodes: RegionCode[])`

Retrieves a list of country codes from multiple continents or regions.



#### Usage Example

```typescript
const countries = CountryData.getCountriesFromMultipleContinentsOrRegions(
  ["AF", "AS"],
  ["WesternAfrica", "EastAsia"]
);
console.log(countries); // ["NG", "CN", "IN", ...]
```

### `getAllContinentData()`

This method retrieves all continent data, including a list of countries within each continent.


#### Usage Example

```typescript
const continentData = CountryData.getAllContinentData();
console.log(continentData);
```


### `isCountryInContinent(countryCode: CountryCode, continentCode: ContinentCode)`

This method checks if a country belongs to a specific continent.


#### Usage Example


```typescript
const isInAfrica = CountryData.isCountryInContinent("NG", "AF");
console.log(isInAfrica); // true if Nigeria ('NG') is in Africa
```


### getRegionByCountryName(countryName: string)

This method retrieves the region code for a specified country name.

#### Usage Example


```typescript 
const regionByCountryName = CountryData.getRegionByCountryName("Kenya");
console.log(regionByCountryName);
// Should print the region code corresponding to Kenya, e.g., 'EasternAfrica'

```



### `getCountryNamesByRegion(regionName: string)`


This method retrieves country names for a specified region.

#### Usage Example


```typescript
const countryNamesByRegion =
  CountryData.getCountryNamesByRegion("EasternAfrica");
console.log(countryNamesByRegion);
// Should print a list of country names in the Eastern Africa region
```


### `getCountryCodesByRegion(regionName: string)`

This method retrieves country codes for a specified region.

#### Usage Example


```typescript 

const countryCodesByRegion =
  CountryData.getCountryCodesByRegion("SouthernAfrica");
console.log(countryCodesByRegion);
// Should print an array of country codes in Southern Africa
```






## Query Builder Methods


:::info

Unless otherwise specified, **all Query Builder Methods** return the current query instance, allowing for method chaining.

:::



### `continent(continentCodes: ContinentCode[])`

This method filters countries by the specified **continent codes**.



### `region(regionOrRegions: RegionCode | RegionCode[])`

This method filters countries by the specified **region or regions**.


### `country(countryCodes: string[])`

Filters countries by the specified **country codes**.


### `excludeContinent(continentCodes: ContinentCode[])`

This method **excludes** countries from the result based on the specified **continent codes**.


### `excludeRegion(regionCodes: RegionCode[])`

This method **excludes** countries from the result based on the specified **region codes**.

### `countryName(name: string)`

Filters countries by the specified **country name (partial match)**..


### `excludeCountryCode(countryCodes: string[])`

**Excludes** countries from the result based on the specified **country codes**.


### `excludeCountryName(countryNames: string[])`

**Excludes** countries from the result based on the specified **country names**.


### `sortByName()`

This method **sorts** the results by **country name**.


### `sortByContinent()`

This method **sorts** the results by **continent name**.


### `sortByRegion()`

**Sorts** the results by **region name**.


### `limit(limit: number)`

This method **limits** the number of results returned.


### `selectFields(fields: Array<keyof CountryDetails>)`

This method **selects specific fields** from the result set to include in the response


### `withDetails()`

This method includes additional details such as continent and region for each country.


### `execute()`

This method executes the query and returns the filtered and sorted list of countries, either as country names or with full details based on the applied filters and configurations.
It **returns a list of country names or full country details**.