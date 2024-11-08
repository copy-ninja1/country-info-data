import { CountryContinent } from "../src/index";

const continents = CountryContinent.getContinents();
const nigeria = CountryContinent.getCountryDetails("NG");
const continentByName = CountryContinent.getContinentName("AS");

console.log(continents, nigeria, { continent: continentByName });
