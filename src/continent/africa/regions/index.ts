import centralAfrica from "./centralAfrica";
import easternAfrica from "./easternAfrica";
import northernAfrica from "./northernAfrica";
import southernAfrica from "./southernAfrica";
import subSaharanAfrica from "./subSaharanAfrica";
import westernAfrica from "./westernAfrica";

const africanCountries = {
  ...centralAfrica,
  ...easternAfrica,
  ...northernAfrica,
  ...southernAfrica,
  ...westernAfrica,

  // NOTE: no need of adding subSaharanAfrica since it's a combination of other west,
  // east and north african country which has already been added to this object
};

export {
  centralAfrica,
  easternAfrica,
  northernAfrica,
  southernAfrica,
  subSaharanAfrica,
  westernAfrica,
};

export default africanCountries;
