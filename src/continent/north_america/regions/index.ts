import caribbean from "./caribbean";
import centralAmerica from "./centralAmerica";
import northAmericaMainland from "./northAmericaMainland";

const northAmericanCountries = {
  ...caribbean,
  ...centralAmerica,
  ...northAmericaMainland,
};

export { caribbean, centralAmerica, northAmericaMainland };

export default northAmericanCountries;
