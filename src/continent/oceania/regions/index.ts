import australiaAndNewZealand from "./australiaAndNewZealand";
import melanesia from "./melanesia";
import micronesia from "./micronesia";
import polynesia from "./polynesia";

const oceaniaCountries = {
  ...melanesia,
  ...polynesia,
  ...micronesia,
  ...australiaAndNewZealand,
};

export { melanesia, polynesia, micronesia, australiaAndNewZealand };

export default oceaniaCountries;
