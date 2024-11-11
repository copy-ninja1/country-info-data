import CountryInfoData from "./countryInfoData";
import {
  ContinentCode,
  RegionCode,
  CountryDetails,
  regionToContinent,
} from "./types";

/**
 * Class to query and filter country information based on various criteria such as continent, region, country code, etc.
 */
export default class CountryInfoQuery {
  private continentCodes: Set<ContinentCode> = new Set();
  private regionCodes: Set<RegionCode> = new Set();
  private countryCodes: Set<string> = new Set();
  private excludeContinents: Set<ContinentCode> = new Set();
  private excludeRegions: Set<RegionCode> = new Set();
  private excludeCountryCodes: Set<string> = new Set();
  private excludeCountryNames: Set<string> = new Set();
  private countryNameFilter: string | null = null;
  private sortBy: "name" | "continent" | "region" | null = null;
  private limitResults: number | null = null;
  private includeDetails: boolean = false;
  private fields: Array<keyof CountryDetails> = [];

  /**
   * Filters countries by the specified continent codes.
   * @param continentCodes The continent codes to filter by.
   * @returns The current query instance for method chaining.
   */
  continent(continentCodes: ContinentCode[]): this {
    this.continentCodes = new Set(continentCodes);
    return this;
  }

  /**
   * Filters countries by the specified region or regions.
   * @param regionOrRegions The region code or an array of region codes to filter by.
   * @returns The current query instance for method chaining.
   */
  region(regionOrRegions: RegionCode | RegionCode[]): this {
    if (Array.isArray(regionOrRegions)) {
      this.regionCodes = new Set(regionOrRegions);
    } else {
      this.regionCodes = new Set([regionOrRegions]);
    }

    if (this.continentCodes.size > 0) {
      const validContinents = new Set<ContinentCode>();
      for (const region of this.regionCodes) {
        const continent = regionToContinent[region];
        if (continent) validContinents.add(continent);
      }

      this.continentCodes = new Set(
        [...this.continentCodes].filter(
          (continent) => !validContinents.has(continent)
        )
      );
    }

    return this;
  }

  /**
   * Filters countries by the specified country codes.
   * @param countryCodes The country codes to filter by.
   * @returns The current query instance for method chaining.
   */
  country(countryCodes: string[]): this {
    countryCodes.forEach((code) => this.countryCodes.add(code));
    return this;
  }

  /**
   * Excludes countries from the result based on the specified continent codes.
   * @param continentCodes The continent codes to exclude.
   * @returns The current query instance for method chaining.
   */
  excludeContinent(continentCodes: ContinentCode[]): this {
    continentCodes.forEach((code) => this.excludeContinents.add(code));
    return this;
  }

  /**
   * Excludes countries from the result based on the specified region codes.
   * @param regionCodes The region codes to exclude.
   * @returns The current query instance for method chaining.
   */
  excludeRegion(regionCodes: RegionCode[]): this {
    regionCodes.forEach((code) => this.excludeRegions.add(code));
    return this;
  }

  /**
   * Filters countries by the specified country name.
   * @param name The country name to filter by.
   * @returns The current query instance for method chaining.
   */
  countryName(name: string): this {
    this.countryNameFilter = name.toLowerCase();
    return this;
  }

  /**
   * Excludes countries from the result based on the specified country codes.
   * @param countryCodes The country codes to exclude.
   * @returns The current query instance for method chaining.
   */
  excludeCountryCode(countryCodes: string[]): this {
    countryCodes.forEach((code) => this.excludeCountryCodes.add(code));
    return this;
  }

  /**
   * Excludes countries from the result based on the specified country names.
   * @param countryNames The country names to exclude.
   * @returns The current query instance for method chaining.
   */
  excludeCountryName(countryNames: string[]): this {
    countryNames.forEach((name) =>
      this.excludeCountryNames.add(name.toLowerCase())
    );
    return this;
  }

  /**
   * Sorts the results by country name.
   * @returns The current query instance for method chaining.
   */
  sortByName(): this {
    this.sortBy = "name";
    return this;
  }

  /**
   * Sorts the results by continent name.
   * @returns The current query instance for method chaining.
   */
  sortByContinent(): this {
    this.sortBy = "continent";
    return this;
  }

  /**
   * Sorts the results by region name.
   * @returns The current query instance for method chaining.
   */
  sortByRegion(): this {
    this.sortBy = "region";
    return this;
  }

  /**
   * Limits the number of results returned.
   * @param limit The maximum number of results to return.
   * @returns The current query instance for method chaining.
   */
  limit(limit: number): this {
    this.limitResults = limit;
    return this;
  }

  /**
   * Selects specific fields from the result set to include in the response.
   * @param fields The fields of the `CountryDetails` to include in the result.
   * @returns The current query instance for method chaining.
   */
  selectFields(fields: Array<keyof CountryDetails>): this {
    this.fields = fields;
    return this;
  }

  /**
   * Includes additional details for each country in the result.
   * @returns The current query instance for method chaining.
   */
  withDetails(): this {
    this.includeDetails = true;
    return this;
  }

  /**
   * Executes the query and returns the filtered and sorted list of countries, either as country names or with full details.
   * @returns A list of country names or full country details based on the applied filters and configurations.
   */
  execute(): (string | CountryDetails)[] | undefined {
    if (
      this.continentCodes.size === 0 &&
      this.regionCodes.size === 0 &&
      this.countryCodes.size === 0
    ) {
      return undefined;
    }

    let countryCodes =
      CountryInfoData.getCountriesFromMultipleContinentsOrRegions(
        [...this.continentCodes],
        [...this.regionCodes]
      );

    countryCodes = countryCodes.filter((code) => {
      const continent = CountryInfoData.getContinentCodeByCountryCode(code);
      const region = CountryInfoData.getRegionByCountryCode(code);

      return (
        !this.excludeContinents.has(continent) &&
        !this.excludeRegions.has(region) &&
        !this.excludeCountryCodes.has(code)
      );
    });

    if (this.countryNameFilter) {
      countryCodes = countryCodes.filter((code) => {
        const name =
          CountryInfoData.getCountryNameByCode(code)?.toLowerCase() ?? "";
        return name.includes(this.countryNameFilter!);
      });
    }

    countryCodes = countryCodes.filter((code) => {
      const name =
        CountryInfoData.getCountryNameByCode(code)?.toLowerCase() ?? "";
      return !this.excludeCountryNames.has(name);
    });

    let results: (string | CountryDetails)[] = countryCodes.map((code) => {
      if (this.includeDetails) {
        const name = CountryInfoData.getCountryNameByCode(code) ?? "";
        const continentCode =
          CountryInfoData.getContinentCodeByCountryCode(code);
        const region = CountryInfoData.getRegionByCountryCode(code);

        return {
          code,
          name,
          continent: continentCode
            ? {
                name: CountryInfoData.getContinentNameByCode(continentCode),
                code: continentCode,
              }
            : undefined,
          region,
        } as CountryDetails;
      } else {
        return CountryInfoData.getCountryNameByCode(code) as string;
      }
    });

    if (this.includeDetails && this.fields.length > 0) {
      results = results.map((result) => {
        if (typeof result === "string") return result;

        const selectedFields: Partial<CountryDetails> = {};
        this.fields.forEach((field) => {
          if (field === "name" && result.name === undefined) {
            selectedFields[field] = "";
          } else if (field === "continent" && result.continent === undefined) {
            selectedFields[field] = undefined;
          } else {
            selectedFields[field] = result[field] as any;
          }
        });

        return selectedFields as CountryDetails;
      });
    }

    if (this.sortBy) {
      results.sort((a, b) => {
        if (typeof a === "string" || typeof b === "string") return 0;

        switch (this.sortBy) {
          case "name":
            return (a.name ?? "").localeCompare(b.name ?? "");
          case "continent":
            return (a.continent?.name ?? "").localeCompare(
              b.continent?.name ?? ""
            );
          case "region":
            return (a.region ?? "").localeCompare(b.region ?? "");
          default:
            return 0;
        }
      });
    }

    if (this.limitResults) {
      results = results.slice(0, this.limitResults);
    }

    return results;
  }
}
