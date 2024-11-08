import countryData from "./continent";

type ContinentCode = "AF" | "AN" | "AS" | "EU" | "NA" | "OC" | "SA";
type CountryCode = string;

interface CountryDetails {
  name: string;
  code: CountryCode;
  continent: ContinentCode;
}

/**
 * Class representing country and continent data.
 * Provides methods for continent and country lookups.
 */
export class CountryContinent {
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
  private static continentCountries: Record<ContinentCode, CountryCode[]> = Object.fromEntries(
    Object.entries(countryData).map(([continent, countries]) => [
      continent as ContinentCode,
      Object.keys(countries),
    ])
  ) as Record<ContinentCode, CountryCode[]>;

  /**
   * Mapping of country codes to country names.
   */
  private static countryNames: Record<CountryCode, string> = Object.assign({}, ...Object.values(countryData));

  /**
   * Cache for continent name lookups.
   */
  private static cache: Record<ContinentCode, string | null> = {
    AF: null,
    AN: null,
    AS: null,
    EU: null,
    NA: null,
    OC: null,
    SA: null,
  };

  /**
   * Mapping of country codes to their respective continent codes.
   */
  private static countryToContinent: Record<CountryCode, ContinentCode> = {};

  /**
   * Static initializer to populate the countryToContinent map.
   * Associates each country code with its continent.
   */
  static {
    for (const [continent, countries] of Object.entries(this.continentCountries) as [ContinentCode, CountryCode[]][]) {
      countries.forEach((country) => {
        this.countryToContinent[country] = continent;
      });
    }
  }

  /**
   * Get a list of all continents with their codes and names.
   *
   * @returns {Record<ContinentCode, string>} - An object mapping each continent code to its name.
   */
  static getContinents(): Record<ContinentCode, string> {
    return this.continents;
  }

  /**
   * Get the name of a continent by its code.
   *
   * @param {ContinentCode} code - The continent code (e.g., "AF" for Africa).
   * @returns {string | null} - The name of the continent, or null if the code is invalid.
   */
  static getContinentName(code: ContinentCode): string | null {
    return this.continents[code] || null;
  }

  /**
   * Get a list of country codes for a specific continent.
   *
   * @param {ContinentCode} continent - The continent code.
   * @returns {CountryCode[]} - An array of country codes within the specified continent.
   */
  static getCountriesByContinent(continent: ContinentCode): CountryCode[] {
    return this.continentCountries[continent] || [];
  }

  /**
   * Get the continent code associated with a specific country code.
   *
   * @param {CountryCode} country - The country code (e.g., "US" for United States).
   * @returns {ContinentCode | null} - The continent code, or null if the country is not found.
   */
  static getContinentByCountry(country: CountryCode): ContinentCode | null {
    return this.countryToContinent[country] || null;
  }

  /**
   * Get detailed information about a country, including its name, code, and continent.
   *
   * @param {CountryCode} countryCode - The country code.
   * @returns {CountryDetails | null} - The country details, or null if the country code is invalid.
   */
  static getCountryDetails(countryCode: CountryCode): CountryDetails | null {
    const countryName = this.countryNames[countryCode];
    const continent = this.countryToContinent[countryCode];

    if (countryName && continent) {
      return {
        name: countryName,
        code: countryCode,
        continent,
      };
    }

    return null; // Return null if the country code is invalid
  }
}
