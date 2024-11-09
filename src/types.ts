type ContinentCode = "AF" | "AN" | "AS" | "EU" | "NA" | "OC" | "SA";
type CountryCode = string;

interface CountryDetails {
  name: string;
  code: CountryCode;
  continent?: ContinentCode;
}

export type { ContinentCode, CountryCode, CountryDetails };
