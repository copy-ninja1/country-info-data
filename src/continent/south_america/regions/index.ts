import amazonBasin from "./amazonBasin";
import andeanStates from "./andeanStates";
import southernCone from "./southernCone";

const southAmericaCountries = {
  ...amazonBasin,
  ...andeanStates,
  ...southernCone,
};

export { amazonBasin, andeanStates, southernCone };

export default southAmericaCountries;
