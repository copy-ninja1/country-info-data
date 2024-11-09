/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ["main", "next"],
  releaseRules: [{ breaking: true, release: "major" }],
};
