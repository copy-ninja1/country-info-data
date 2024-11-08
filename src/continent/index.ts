import { ContinentCode, CountryCode } from "../types";
import countriesInAfrica from "./africa";
import countriesInAntarctica from "./antarctica";
import countriesInAsia from "./asia";
import countriesInEurope from "./europe";
import countriesInNorthAmerica from "./north_america";
import countriesInOceeania from "./oceania";
import countriesInSouthAmeria from "./south_america";

const countryData: Record<ContinentCode, Record<CountryCode, string>> = {
  AF: countriesInAfrica,
  AN: countriesInAntarctica,
  AS: countriesInAsia,
  EU: countriesInEurope,
  NA: countriesInNorthAmerica,
  OC: countriesInOceeania,
  SA: countriesInSouthAmeria,
};

export default countryData;
