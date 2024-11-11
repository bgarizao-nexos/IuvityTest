module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    axios: "axios/dist/node/axios.cjs",
  },
};
