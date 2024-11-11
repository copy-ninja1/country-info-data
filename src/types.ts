type ContinentName =
  | "Africa"
  | "Antarctica"
  | "Asia"
  | "Europe"
  | "North America"
  | "Oceania"
  | "South America";

type ContinentRegionsMap = {
  AF: [
    "NorthernAfrica",
    "SouthernAfrica",
    "EasternAfrica",
    "WesternAfrica",
    "CentralAfrica"
  ];
  AS: ["EastAsia", "CentralAsia", "SouthAsia", "SoutheastAsia", "WesternAsia"];
  EU: [
    "NorthernEurope",
    "SouthernEurope",
    "EasternEurope",
    "WesternEurope",
    "CentralEurope"
  ];
  NA: ["Caribbean", "CentralAmerica", "NorthAmericaMainland"];
  OC: ["AustraliaAndNewZealand", "Melanesia", "Micronesia", "Polynesia"];
  SA: ["AmazonBasin", "SouthernCone", "AndeanStates"];
};

type RegionCode =
  | ContinentRegionsMap[keyof ContinentRegionsMap][number]
  | "SubSaharanAfrica";

type ContinentCode = "AF" | "AN" | "AS" | "EU" | "NA" | "OC" | "SA";

type CountryCode = string;

interface CountryDetails {
  name: string;
  code: CountryCode;
  continent?: { name: ContinentName; code: ContinentCode };
  region?: RegionCode;
}

export type ValidRegionForContinent<Continent extends ContinentCode> =
  Continent extends keyof ContinentRegionsMap
    ? ContinentRegionsMap[Continent][number]
    : never;

export const regionToContinent: Record<RegionCode, ContinentCode> = {
  CentralAfrica: "AF",
  EasternAfrica: "AF",
  NorthernAfrica: "AF",
  SouthernAfrica: "AF",
  WesternAfrica: "AF",
  NorthernEurope: "EU",
  WesternEurope: "EU",
  SouthernEurope: "EU",
  EasternEurope: "EU",
  CentralEurope: "EU",
  EastAsia: "AS",
  SouthAsia: "AS",
  SoutheastAsia: "AS",
  CentralAsia: "AS",
  WesternAsia: "AS",
  AustraliaAndNewZealand: "OC",
  Melanesia: "OC",
  Micronesia: "OC",
  Polynesia: "OC",
  SouthernCone: "SA",
  AndeanStates: "SA",
  AmazonBasin: "SA",
  SubSaharanAfrica: "AF",
  Caribbean: "NA",
  CentralAmerica: "NA",
  NorthAmericaMainland: "NA",
};

export type {
  ContinentCode,
  CountryCode,
  CountryDetails,
  RegionCode,
  ContinentName,
};
