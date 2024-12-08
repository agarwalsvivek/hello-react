module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/src/**/*.spec.tsx", // Include all `.test.js` files under the `tests` folder
  ],
};
