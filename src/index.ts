import countryData from "./continent";
import { ContinentCode, CountryCode, CountryDetails } from "./types";

/**
 * Class representing country and continent data.
 * Provides methods for continent and country lookups.
 */
export default class CountryContinent {
  /**
   * Mapping of continent codes to continent names.
   */
  private static continents: Record<ContinentCode, string> = {
    AF: "Africa",
    AN: "Antarctica",
    AS: "Asia",
    EU: "Europe",
    NA: "North America",
    OC: "Oceania",
    SA: "South America",
  };

  /**
   * List of country codes for each continent, extracted from country data.
   */
  private static continentCountries: Record<ContinentCode, CountryCode[]> =
    Object.fromEntries(
      Object.entries(countryData).map(([continent, countries]) => [
        continent as ContinentCode,
        Object.keys(countries),
      ])
    ) as Record<ContinentCode, CountryCode[]>;

  /**
   * Mapping of country codes to country names.
   */
  private static countryNames: Record<CountryCode, string> = Object.assign(
    {},
    ...Object.values(countryData)
  );

  /**
   * Mapping of country codes to their respective continent codes.
   */
  private static countryToContinent: Record<CountryCode, ContinentCode> = {};

  /**
   * Static initializer to populate the countryToContinent map.
   * Associates each country code with its continent.
   */
  static {
    for (const [continent, countries] of Object.entries(
      this.continentCountries
    ) as [ContinentCode, CountryCode[]][]) {
      countries.forEach((country) => {
        this.countryToContinent[country] = continent;
      });
    }
  }

  /**
   * Overwrites the country data with the provided array of country objects.
   * @param {Country[]} countries - Array of countries to add or overwrite, each with a code and name.
   */
  static overwrite(countries: CountryDetails[]): void {
    countries.forEach(({ code, name }) => {
      this.countryNames[code as CountryCode] = name;
    });
  }

  /**
   * Retrieves the name of a country by its code.
   * @param {CountryCode} code - The country code (e.g., "US" for the United States).
   * @returns {string | undefined} The name of the country or undefined if not found.
   */
  static getName(code: CountryCode): string | undefined {
    return this.countryNames[code];
  }

  /**
   * Retrieves the country code by its name.
   * @param {string} name - The English name of the country.
   * @returns {CountryCode | undefined} The country code or undefined if not found.
   */
  static getCode(name: string): CountryCode | undefined {
    return Object.keys(this.countryNames).find(
      (code) => this.countryNames[code as CountryCode] === name
    ) as CountryCode | undefined;
  }

  /**
   * Retrieves an array of all country names.
   * @returns {string[]} An array of all country names.
   */
  static getNames(): string[] {
    return Object.values(this.countryNames);
  }

  /**
   * Retrieves an array of all country codes.
   * @returns {CountryCode[]} An array of all country codes.
   */
  static getCodes(): CountryCode[] {
    return Object.keys(this.countryNames) as CountryCode[];
  }

  /**
   * Retrieves a name-to-code mapping for all countries.
   * @returns {{ [name: string]: CountryCode }} An object mapping each country name to its code.
   */
  static getNameList(): { [name: string]: CountryCode } {
    return Object.fromEntries(
      Object.entries(this.countryNames).map(([code, name]) => [name, code])
    );
  }

  /**
   * Retrieves a code-to-name mapping for all countries.
   * @returns {{ [code: string]: string }} An object mapping each country code to its name.
   */
  static getCodeList(): { [code: string]: string } {
    return { ...this.countryNames };
  }

  /**
   * Retrieves an array of country objects, each with a code and name.
   * @returns {Country[]} An array of all country information.
   */
  static getData(): CountryDetails[] {
    return Object.entries(this.countryNames).map(([code, name]) => ({
      code,
      name,
    }));
  }

  /**
   * Retrieves the name of a continent by its code.
   * @param {ContinentCode} code - The continent code (e.g., "AF" for Africa).
   * @returns {string | undefined} The name of the continent or undefined if not found.
   */
  static getContinentName(code: ContinentCode): string | undefined {
    return this.continents[code];
  }

  /**
   * Retrieves an array of all continent codes.
   * @returns {ContinentCode[]} An array of all continent codes.
   */
  static getContinentCodes(): ContinentCode[] {
    return Object.keys(this.continents) as ContinentCode[];
  }

  /**
   * Retrieves a list of country codes for the specified continent code.
   * @param {ContinentCode} continent - The continent code.
   * @returns {CountryCode[]} An array of country codes within the specified continent.
   */
  static getCountriesByContinent(continent: ContinentCode): CountryCode[] {
    return this.continentCountries[continent] || [];
  }

  /**
   * Retrieves the continent code associated with a given country code.
   * @param {CountryCode} country - The country code.
   * @returns {ContinentCode | undefined} The continent code or undefined if not found.
   */
  static getContinentByCountry(
    country: CountryCode
  ): ContinentCode | undefined {
    return this.countryToContinent[country];
  }

  /**
   * Retrieves a list of country codes for the specified continent name.
   * @param {string} continentName - The English name of the continent.
   * @returns {CountryCode[]} An array of country codes within the specified continent.
   */
  static getCountriesByContinentName(continentName: string): CountryCode[] {
    const continentCode = this.getContinentCodeByName(continentName);
    return continentCode ? this.getCountriesByContinent(continentCode) : [];
  }

  /**
   * Retrieves a list of country names for the specified continent name.
   * @param {string} continentName - The English name of the continent.
   * @returns {string[]} An array of country names within the specified continent.
   */
  static getCountryNamesByContinentName(continentName: string): string[] {
    return this.getCountriesByContinentName(continentName).map(
      (code) => this.countryNames[code]
    );
  }

  /**
   * Retrieves the continent code by the English name of the continent.
   * @param {string} name - The English name of the continent.
   * @returns {ContinentCode | undefined} The continent code or undefined if not found.
   * @private
   */
  private static getContinentCodeByName(
    name: string
  ): ContinentCode | undefined {
    return Object.entries(this.continents).find(
      ([, continentName]) => continentName.toLowerCase() === name.toLowerCase()
    )?.[0] as ContinentCode | undefined;
  }
}
