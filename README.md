# country-info-data

This library helps manage and retrieve continent and country information. It provides methods to fetch details about continents, find countries by continent, and get detailed information about specific countries.

CountryData offers a comprehensive and flexible set of methods for working with country, continent, and region data. Whether you need to query specific countries or work with large datasets, this class provides the tools to efficiently access and manipulate geo information.

## Features

- Lookup countries by their country code or name.
- Get lists of all countries, continents, or regions.
- Retrieve detailed country information, including continent and region.
- Update country data with new information.
- Search for countries based on partial name matches.
- Retrieve countries from multiple continents or regions at once.
- Check if a country belongs to a specific continent or region.
- Filter countries by continent, region, or country code.
- Exclude countries by continent, region, country code, or country name.
- Filter countries by name or partial name match.
- Sort the results by name, continent, or region.
- Limit the number of results returned.
- Retrieve specific fields from the country details.
- Include additional details such as continent and region for each country.
- Chain methods for building complex queries.

## Examples

```typescript
import CountryData from "country-info-data";
```

1. **`findCountryDetailsByLocation`**

- This method allows you to retrieve information about countries based on a given location . The location can be a continent name, region name, country name, or country code.

```typescript
CountryInfoData.findCountryDetailsByLocation(location: string): CountryDetails[]
```

2. **`query()`**

   - Starts a new country info query.
   - Returns a new `CountryInfoQuery` instance.
   - Example:
     ```typescript
     const query = CountryData.query();
     ```

3. **`updateCountryData(countries: CountryDetails[])`**

   - Updates country data with new country details.
   - Example:
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

4. **`getCountryNameByCode(countryCode: CountryCode)`**

   - Retrieves the country name by its country code.
   - Returns the country name or `undefined` if not found.
   - Example:
     ```typescript
     const countryName = CountryData.getCountryNameByCode("US");
     console.log(countryName); // "United States"
     ```

5. **`getCountryCodeByName(name: string)`**

   - Retrieves the country code by its country name.
   - Returns the country code or `undefined` if not found.
   - Example:
     ```typescript
     const countryCode = CountryData.getCountryCodeByName("United States");
     console.log(countryCode); // "US"
     ```

6. **`getAllCountryNames()`**

   - Retrieves a list of all country names.
   - Example:
     ```typescript
     const countryNames = CountryData.getAllCountryNames();
     console.log(countryNames); // ["United States", "Canada", "Mexico", ...]
     ```

7. **`getAllCountryCodes()`**

   - Retrieves a list of all country codes.
   - Example:
     ```typescript
     const countryCodes = CountryData.getAllCountryCodes();
     console.log(countryCodes); // ["US", "CA", "MX", ...]
     ```

7. **`getAllCountryDetails()`**

   - Retrieves a list of all country details (code, name, continent, and region).
   - Example:
     ```typescript
     const countryDetails = CountryData.getAllCountryDetails();
     console.log(countryDetails);
     ```

8. **`getContinentNameByCode(code: ContinentCode)`**

   - Retrieves the continent name by its continent code.
   - Returns the continent name or `undefined` if not found.
   - Example:
     ```typescript
     const continentName = CountryData.getContinentNameByCode("NA");
     console.log(continentName); // "North America"
     ```

9. **`getAllContinentCodes()`**

   - Retrieves a list of all continent codes.
   - Example:
     ```typescript
     const continentCodes = CountryData.getAllContinentCodes();
     console.log(continentCodes); // ["AF", "AN", "AS", "EU", "NA", "OC", "SA"]
     ```

10. **`getCountryCodesByContinent(continentCode: ContinentCode)`**

    - Retrieves a list of country codes for a given continent code.
    - Example:
      ```typescript
      const countryCodesInAfrica = CountryData.getCountryCodesByContinent("AF");
      console.log(countryCodesInAfrica); // ["DZ", "EG", "MA", ...]
      ```

11. **`getContinentCodeByCountryCode(countryCode: CountryCode)`**

    - Retrieves the continent code for a given country code.
    - Example:
      ```typescript
      const continentCode = CountryData.getContinentCodeByCountryCode("US");
      console.log(continentCode); // "NA"
      ```

12. **`getCountryCodesByContinentName(continentName: ContinentName)`**

    - Retrieves a list of country codes for a given continent name.
    - Example:
      ```typescript
      const countryCodesInNorthAmerica =
        CountryData.getCountryCodesByContinentName("North America");
      console.log(countryCodesInNorthAmerica); // ["US", "CA", "MX"]
      ```

13. **`getCountryNamesByContinentName(continentName: ContinentName)`**

    - Retrieves a list of country names for a given continent name.
    - Example:
      ```typescript
      const countryNamesInAfrica =
        CountryData.getCountryNamesByContinentName("Africa");
      console.log(countryNamesInAfrica); // ["Algeria", "Egypt", "Morocco", ...]
      ```

14. **`getRegionByContinent(continentCode: ContinentCode)`**

    - Retrieves a list of region codes associated with a given continent code.
    - Example:
      ```typescript
      const regionsInAsia = CountryData.getRegionByContinent("AS");
      console.log(regionsInAsia); // ["EastAsia", "SouthAsia", "SoutheastAsia", ...]
      ```

15. **`getRegionByCountryCode(countryCode: CountryCode)`**

    - Retrieves the region code for a given country code.
    - Example:
      ```typescript
      const regionCode = CountryData.getRegionByCountryCode("US");
      console.log(regionCode); // "NorthAmericaMainland"
      ```

16. **`searchCountriesByName(partialName: string)`**

    - Searches for countries by a partial country name.
    - Returns an array of country names matching the search.
    - Example:
      ```typescript
      const countries = CountryData.searchCountriesByName("Unite");
      console.log(countries); // ["United States", "United Kingdom", ...]
      ```

17. **`getCountriesFromMultipleContinentsOrRegions(continentCodes: ContinentCode[], regionCodes: RegionCode[])`**

    - Retrieves a list of country codes from multiple continents or regions.
    - Example:
      ```typescript
      const countries = CountryData.getCountriesFromMultipleContinentsOrRegions(
        ["AF", "AS"],
        ["WesternAfrica", "EastAsia"]
      );
      console.log(countries); // ["NG", "CN", "IN", ...]
      ```

18. **`getAllContinentData()`**

    - Retrieves all continent data, including all countries in each continent.
    - Example:
      ```typescript
      const continentData = CountryData.getAllContinentData();
      console.log(continentData);
      ```

19. **`isCountryInContinent(countryCode: CountryCode, continentCode: ContinentCode)`**

    - Checks if a country is in a specific continent.
    - Example:
      ```typescript
      const isInAfrica = CountryData.isCountryInContinent("NG", "AF");
      console.log(isInAfrica); // true if Nigeria ('NG') is in Africa
      ```

20. **`getRegionByCountryName(countryName: string)`**

    - Gets the region code by country name.
    - Example:
      ```typescript
      const regionByCountryName = CountryData.getRegionByCountryName("Kenya");
      console.log(regionByCountryName);
      // Should print the region code corresponding to Kenya, e.g., 'EasternAfrica'
      ```

21. **`getCountryNamesByRegion(regionName: string)`**

    - Gets country names by region.
    - Example:
      ```typescript
      const countryNamesByRegion =
        CountryData.getCountryNamesByRegion("EasternAfrica");
      console.log(countryNamesByRegion);
      // Should print a list of country names in the Eastern Africa region
      ```

22. **`getCountryCodesByRegion(regionName: string)`**

    - Gets country codes by region.
    - Example:
      ```typescript
      const countryCodesByRegion =
        CountryData.getCountryCodesByRegion("SouthernAfrica");
      console.log(countryCodesByRegion);
      // Should print an array of country codes in Southern Africa
      ```

### Query Builder Methods

- **`continent(continentCodes: ContinentCode[])`**

  - Filters countries by the specified continent codes.
  - Returns the current query instance for method chaining.

- **`region(regionOrRegions: RegionCode | RegionCode[])`**

  - Filters countries by the specified region or regions.
  - Returns the current query instance for method chaining.

- **`country(countryCodes: string[])`**

  - Filters countries by the specified country codes.
  - Returns the current query instance for method chaining.

- **`excludeContinent(continentCodes: ContinentCode[])`**

  - Excludes countries from the result based on the specified continent codes.
  - Returns the current query instance for method chaining.

- **`excludeRegion(regionCodes: RegionCode[])`**

  - Excludes countries from the result based on the specified region codes.
  - Returns the current query instance for method chaining.

- **`countryName(name: string)`**

  - Filters countries by the specified country name (partial match).
  - Returns the current query instance for method chaining.

- **`excludeCountryCode(countryCodes: string[])`**

  - Excludes countries from the result based on the specified country codes.
  - Returns the current query instance for method chaining.

- **`excludeCountryName(countryNames: string[])`**

  - Excludes countries from the result based on the specified country names.
  - Returns the current query instance for method chaining.

- **`sortByName()`**

  - Sorts the results by country name.
  - Returns the current query instance for method chaining.

- **`sortByContinent()`**

  - Sorts the results by continent name.
  - Returns the current query instance for method chaining.

- **`sortByRegion()`**

  - Sorts the results by region name.
  - Returns the current query instance for method chaining.

- **`limit(limit: number)`**

  - Limits the number of results returned.
  - Returns the current query instance for method chaining.

- **`selectFields(fields: Array<keyof CountryDetails>)`**

  - Selects specific fields from the result set to include in the response.
  - Returns the current query instance for method chaining.

- **`withDetails()`**

  - Includes additional details such as continent and region for each country.
  - Returns the current query instance for method chaining.

- **`execute()`**
  - Executes the query and returns the filtered and sorted list of countries, either as country names or with full details based on the applied filters and configurations.
  - Returns a list of country names or full country details.

## Example Usage

```typescript
import { CountryInfoQuery } from "country-info-data";

// Create a new query instance
const query = new CountryInfoQuery();

// Build a query to find countries in Africa, excluding specific countries, and limit the results
const results = query
  .continent(["AF"])
  .excludeCountryName(["United States", "Canada"])
  .limit(5)
  .execute();

console.log(results);
```

## Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Open a pull request.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

```

```
