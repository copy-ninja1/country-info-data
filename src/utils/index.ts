import {
  ContinentCode,
  CountryCode,
  CountryDetails,
  RegionCode,
} from "../types";

function generateCountryDetails(
  countries: Record<CountryCode, string>,
  continent: ContinentCode,
  region: RegionCode
): Record<CountryCode, CountryDetails> {
  const countryDetails: Record<CountryCode, CountryDetails> = {};

  for (const [code, name] of Object.entries(countries)) {
    countryDetails[code as CountryCode] = {
      name,
      code: code as CountryCode,
      continent,
      region,
    };
  }

  return countryDetails;
}

export { generateCountryDetails };
