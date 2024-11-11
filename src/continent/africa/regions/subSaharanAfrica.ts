import centralAfrica from "./centralAfrica";
import easternAfrica from "./easternAfrica";
import southernAfrica from "./southernAfrica";
import westernAfrica from "./westernAfrica";

const subSaharanAfrica = [
  // Western Africa
  ...Object.keys(westernAfrica),

  // Eastern Africa
  ...Object.keys(easternAfrica),

  // Central Africa
  ...Object.keys(centralAfrica),

  // Southern Africa
  ...Object.keys(southernAfrica),
];

export default subSaharanAfrica;
