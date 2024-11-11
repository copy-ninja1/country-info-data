import countriesInAsia from "./asia";
import countriesInAfrica from "./africa";
import southAmericaCountries from "./south_america";
import countriesInAntarctica from "./antarctica";
import countriesInEurope from "./europe";
import countriesInNorthAmerica from "./north_america";
import countriesInOceeania from "./oceania";

import { ContinentCode, CountryCode } from "../types";

const allCountry: Record<
  ContinentCode,
  Record<CountryCode, { name: string }>
> = {
  AF: countriesInAfrica,
  AN: countriesInAntarctica,
  AS: countriesInAsia,
  EU: countriesInEurope,
  NA: countriesInNorthAmerica,
  OC: countriesInOceeania,
  SA: southAmericaCountries,
};

export default allCountry;
