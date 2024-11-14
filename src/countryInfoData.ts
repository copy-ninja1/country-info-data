import countryData from "./continent";
import {
  northernAfrica,
  southernAfrica,
  centralAfrica,
  subSaharanAfrica,
  westernAfrica,
  easternAfrica,
} from "./continent/africa";
import {
  centralAsia,
  eastAsia,
  southAsia,
  southeastAsia,
  westernAsia,
} from "./continent/asia";
import {
  centralEurope,
  easternEurope,
  northernEurope,
  southernEurope,
  westernEurope,
} from "./continent/europe";
import {
  caribbean,
  centralAmerica,
  northAmericaMainland,
} from "./continent/north_america";
import {
  australiaAndNewZealand,
  melanesia,
  micronesia,
  polynesia,
} from "./continent/oceania";
import {
  amazonBasin,
  andeanStates,
  southernCone,
} from "./continent/south_america";
import CountryInfoQuery from "./query";
import {
  ContinentCode,
  CountryCode,
  RegionCode,
  CountryDetails,
  ContinentName,
} from "./types";

/**
 * Class representing country and continent data.
 * Provides methods for continent and country lookups.
 */
export default class CountryInfoData {
  /**
   * A record of continent codes and their corresponding names.
   * @private
   */
  private static continents: Record<ContinentCode, ContinentName> = {
    AF: "Africa",
    AN: "Antarctica",
    AS: "Asia",
    EU: "Europe",
    NA: "North America",
    OC: "Oceania",
    SA: "South America",
  };

  /**
   * Starts a new country info query.
   * @returns A new `CountryInfoQuery` instance.
   */
  static query(): CountryInfoQuery {
    return new CountryInfoQuery();
  }

  /**
   * A record of continent codes and their corresponding country codes.
   * @private
   */
  private static continentCountries: Record<ContinentCode, CountryCode[]> =
    Object.fromEntries(
      Object.entries(countryData).map(([continent, countries]) => [
        continent as ContinentCode,
        Object.keys(countries),
      ])
    ) as Record<ContinentCode, CountryCode[]>;

  /**
   * A record of country codes and their corresponding country names.
   * @private
   */
  private static countryNames: Record<CountryCode, { name: string }> =
    Object.assign({}, ...Object.values(countryData));

  /**
   * A record of country codes and their corresponding continent codes.
   * @private
   */
  private static countryToContinent: Record<CountryCode, ContinentCode> = {};

  /**
   * A record of region codes and their corresponding country codes.
   * @private
   */
  private static regionCountries: Record<RegionCode, CountryCode[]> = {
    NorthernAfrica: Object.keys(northernAfrica),
    SouthernAfrica: Object.keys(southernAfrica),
    CentralAfrica: Object.keys(centralAfrica),
    SoutheastAsia: Object.keys(southeastAsia),
    CentralAsia: Object.keys(centralAsia),
    WesternAsia: Object.keys(westernAsia),
    AustraliaAndNewZealand: Object.keys(australiaAndNewZealand),
    Melanesia: Object.keys(melanesia),
    Micronesia: Object.keys(micronesia),
    Polynesia: Object.keys(polynesia),
    SouthernCone: Object.keys(southernCone),
    AndeanStates: Object.keys(andeanStates),
    WesternAfrica: Object.keys(westernAfrica),
    EasternAfrica: Object.keys(easternAfrica),
    EastAsia: Object.keys(eastAsia),
    SouthAsia: Object.keys(southAsia),
    AmazonBasin: Object.keys(amazonBasin),
    SubSaharanAfrica: subSaharanAfrica,
    NorthernEurope: Object.keys(northernEurope),
    WesternEurope: Object.keys(westernEurope),
    SouthernEurope: Object.keys(southernEurope),
    EasternEurope: Object.keys(easternEurope),
    CentralEurope: Object.keys(centralEurope),
    Caribbean: Object.keys(caribbean),
    CentralAmerica: Object.keys(centralAmerica),
    NorthAmericaMainland: Object.keys(northAmericaMainland),
  };

  static {
    // Populates the countryToContinent record based on continent data.
    for (const [continent, countries] of Object.entries(
      this.continentCountries
    ) as [ContinentCode, CountryCode[]][]) {
      countries.forEach((country) => {
        this.countryToContinent[country] = continent;
      });
    }
  }

  /**
   * Updates country data with new country details.
   * @param countries - The list of country details to update.
   */
  static updateCountryData(countries: CountryDetails[]): void {
    countries.forEach((country) => {
      this.countryNames[country.code as CountryCode] = { name: country.name };
    });
  }

  /**
   * Gets the country name by its country code.
   * @param countryCode - The country code to lookup.
   * @returns The country name, or undefined if not found.
   */
  static getCountryNameByCode(countryCode: CountryCode): string | undefined {
    return this.countryNames[countryCode.toUpperCase()]?.name;
  }

  /**
   * Gets the country code by its country name.
   * @param name - The name of the country to lookup.
   * @returns The country code, or undefined if not found.
   */
  static getCountryCodeByName(name: string): CountryCode | undefined {
    return Object.keys(this.countryNames).find(
      (code) =>
        this.countryNames[code as CountryCode].name.toLowerCase() ===
        name.toLowerCase()
    ) as CountryCode | undefined;
  }

  /**
   * Gets a list of all country names.
   * @returns An array of country names.
   */
  static getAllCountryNames(): string[] {
    return Object.values(this.countryNames).map((country) => country.name);
  }

  /**
   * Gets a list of all country codes.
   * @returns An array of country codes.
   */
  static getAllCountryCodes(): CountryCode[] {
    return Object.keys(this.countryNames) as CountryCode[];
  }

  /**
   * Gets a list of all country details (code, name, continent, and region).
   * @returns An array of country details.
   */
  static getAllCountryDetails(): CountryDetails[] {
    return Object.entries(this.countryNames).map(([code, { name }]) => {
      const continentCode = this.getContinentCodeByCountryCode(
        code as CountryCode
      );
      const region = this.getRegionByCountryName(name);
      return {
        code: code as CountryCode,
        name: name,
        continent: continentCode
          ? { name: this.continents[continentCode], code: continentCode }
          : undefined,
        region: region,
      };
    });
  }

  /**
   * Gets the continent name by its continent code.
   * @param code - The continent code to lookup.
   * @returns The continent name, or undefined if not found.
   */
  static getContinentNameByCode(
    code: ContinentCode
  ): ContinentName | undefined {
    return this.continents[code];
  }

  /**
   * Gets a list of all continent codes.
   * @returns An array of continent codes.
   */
  static getAllContinentCodes(): ContinentCode[] {
    return Object.keys(this.continents) as ContinentCode[];
  }

  /**
   * Gets a list of country codes for a given continent code.
   * @param continentCode - The continent code to lookup.
   * @returns An array of country codes in the continent.
   */
  static getCountryCodesByContinent(
    continentCode: ContinentCode
  ): CountryCode[] {
    return this.continentCountries[continentCode] || [];
  }

  /**
   * Gets the continent code for a given country code.
   * @param countryCode - The country code to lookup.
   * @returns The continent code corresponding to the country.
   */
  static getContinentCodeByCountryCode(
    countryCode: CountryCode
  ): ContinentCode {
    return this.countryToContinent[countryCode.toUpperCase()];
  }

  /**
   * Gets a list of country codes for a given continent name.
   * @param continentName - The continent name to lookup.
   * @returns An array of country codes in the continent.
   */
  static getCountryCodesByContinentName(
    continentName: ContinentName
  ): CountryCode[] {
    const continentCode = this.getContinentCodeByName(continentName);
    return continentCode ? this.getCountryCodesByContinent(continentCode) : [];
  }

  /**
   * Gets a list of country names for a given continent name.
   * @param continentName - The continent name to lookup.
   * @returns An array of country names in the continent.
   */
  static getCountryNamesByContinentName(
    continentName: ContinentName
  ): string[] {
    return this.getCountryCodesByContinentName(continentName).map(
      (code) => this.countryNames[code].name
    );
  }

  /**
   * Gets the continent code for a given continent name.
   * @private
   * @param name - The name of the continent to lookup.
   * @returns The continent code, or undefined if not found.
   */
  private static getContinentCodeByName(
    name: string
  ): ContinentCode | undefined {
    return Object.entries(this.continents).find(
      ([, continentName]) => continentName.toLowerCase() === name.toLowerCase()
    )?.[0] as ContinentCode | undefined;
  }

  /**
   * Gets a list of country codes for a given region code.
   * @param region - The region code to lookup.
   * @returns An array of country codes in the region.
   */
  static getCountryCodesByRegion(region: RegionCode): CountryCode[] {
    return this.regionCountries[region] || [];
  }

  /**
   * Gets a list of country names for a given region code.
   * @param region - The region code to lookup.
   * @returns An array of country names in the region.
   */
  static getCountryNamesByRegion(region: RegionCode): string[] {
    return this.getCountryCodesByRegion(region).map(
      (code) => this.countryNames[code].name
    );
  }

  /**
   * Gets the region code for a given country name.
   * @param countryName - The country name to lookup.
   * @returns The region code corresponding to the country, or undefined if not found.
   */
  static getRegionByCountryName(countryName: string): RegionCode | undefined {
    const countryCode = this.getCountryCodeByName(countryName);
    if (!countryCode) return undefined;
    return this.getRegionByCountryCode(countryCode);
  }

  /**
   * Checks if a country belongs to a specific continent.
   * @param countryCode - The country code to check.
   * @param continentCode - The continent code to check against.
   * @returns True if the country is in the continent, otherwise false.
   */
  static isCountryInContinent(
    countryCode: CountryCode,
    continentCode: ContinentCode
  ): boolean {
    return this.getContinentCodeByCountryCode(countryCode) === continentCode;
  }

  /**
   * Checks if a region belongs to a specific continent.
   * @param region - The region code to check.
   * @param continentCode - The continent code to check against.
   * @returns True if the region belongs to the continent, otherwise false.
   */
  static isRegionInContinent(
    region: RegionCode,
    continentCode: ContinentCode
  ): boolean {
    // Get the list of country codes for the given region
    const countriesInRegion = this.getCountryCodesByRegion(region);

    // Check if any of the countries in the region belong to the continent
    for (const countryCode of countriesInRegion) {
      const countryContinentCode =
        this.getContinentCodeByCountryCode(countryCode);
      if (countryContinentCode === continentCode) {
        return true; // Found a matching country in the continent
      }
    }
    return false; // No countries in the region belong to the continent
  }

  /**
   * Gets the region codes associated with a given continent.
   * @param continentCode - The continent code to lookup.
   * @returns A list of region codes in the continent.
   */
  static getRegionByContinent(continentCode: ContinentCode): RegionCode[] {
    const regionsInContinent: RegionCode[] = [];

    // Iterate through each region and check if it belongs to the continent
    for (const [regionCode, countries] of Object.entries(
      this.regionCountries
    )) {
      // Check if any country in the region belongs to the continent
      if (this.isRegionInContinent(regionCode as RegionCode, continentCode)) {
        regionsInContinent.push(regionCode as RegionCode);
      }
    }

    return regionsInContinent;
  }

  /**
   * Searches for countries by a partial country name.
   * @param partialName - The partial country name to search for.
   * @returns An array of country names matching the search.
   */
  static searchCountriesByName(partialName: string): string[] {
    return Object.values(this.countryNames)
      .filter((name) =>
        name.name.toLowerCase().includes(partialName.toLowerCase())
      )
      .map((name) => name.name);
  }

  /**
   * Gets a list of countries from multiple continents or regions.
   * @param continentCodes - An array of continent codes to include.
   * @param regionCodes - An array of region codes to include.
   * @returns An array of country codes from the specified continents or regions.
   */
  static getCountriesFromMultipleContinentsOrRegions(
    continentCodes: ContinentCode[] = [],
    regionCodes: RegionCode[] = []
  ): CountryCode[] {
    const continentCountries = continentCodes.flatMap((continent) =>
      this.getCountryCodesByContinent(continent)
    );
    const regionCountries = regionCodes.flatMap((region) =>
      this.getCountryCodesByRegion(region)
    );
    return [...new Set([...continentCountries, ...regionCountries])];
  }

  /**
   * Gets all continent data, including all countries in each continent.
   * @returns A record of continent names and their corresponding country names.
   */
  static getAllContinentData(): Record<string, string[]> {
    return Object.entries(this.continents).reduce((acc, [_, continentName]) => {
      acc[continentName] = this.getCountryNamesByContinentName(continentName);
      return acc;
    }, {} as Record<string, string[]>);
  }

  /**
   * Gets the region code for a given country code.
   * @param countryCode - The country code to lookup.
   * @returns The region code corresponding to the country.
   */
  static getRegionByCountryCode(countryCode: CountryCode): RegionCode {
    const region = Object.entries(this.regionCountries).find(([, codes]) =>
      codes.includes(countryCode)
    )?.[0];

    return region as RegionCode;
  }

  /**
   * Finds country details by location.
   * @param location - The continent name, region name, country name, or country code to search for.
   * @returns An array of country details including code, name, continent (name and code), and region code.
   */
  static findCountryDetailsByLocation(location: string): CountryDetails[] {
    const continentCode = this.getContinentCodeByName(
      location as ContinentName
    );
    if (continentCode) {
      // If location matches a continent name, return countries in that continent.
      return this.getCountryCodesByContinent(continentCode).map((code) => ({
        code,
        name: this.getCountryNameByCode(code) as string,
        continent: {
          name: this.continents[continentCode],
          code: continentCode,
        },
        region: this.getRegionByCountryCode(code),
      }));
    }

    const regionCode = location as RegionCode;
    if (regionCode in this.regionCountries) {
      // If location matches a region name, return countries in that region.
      return this.getCountryCodesByRegion(regionCode).map((code) => ({
        code,
        name: this.getCountryNameByCode(code) as string,
        continent: {
          name: this.continents[this.getContinentCodeByCountryCode(code)],
          code: this.getContinentCodeByCountryCode(code),
        },
        region: regionCode,
      }));
    }

    const countryCode = location as CountryCode;
    if (countryCode in this.countryNames) {
      // If location matches a country code, return the specific country details.
      return [
        {
          code: countryCode,
          name: this.getCountryNameByCode(countryCode) as string,
          continent: {
            name: this.continents[
              this.getContinentCodeByCountryCode(countryCode)
            ],
            code: this.getContinentCodeByCountryCode(countryCode),
          },
          region: this.getRegionByCountryCode(countryCode),
        },
      ];
    }

    const countryNameCode = this.getCountryCodeByName(location);
    if (countryNameCode) {
      // If location matches a country name, return the specific country details.
      return [
        {
          code: countryNameCode,
          name: location,
          continent: {
            name: this.continents[
              this.getContinentCodeByCountryCode(countryNameCode)
            ],
            code: this.getContinentCodeByCountryCode(countryNameCode),
          },
          region: this.getRegionByCountryCode(countryNameCode),
        },
      ];
    }

    // If location doesn't match any known location type, return an empty array.
    return [];
  }
}
