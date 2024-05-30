/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx}"],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    transform: {
      "^.+\\.[tj]sx?$": "babel-jest",
    },
    moduleNameMapper: {
      "^#(.*)$": "<rootDir>/src/$1",
      "\\.(css|less|scss|sss|styl)$": "<rootDir>/styleMock.js",
    },
    transformIgnorePatterns: ["/node_modules/(?!axios/.*)"],
  };
};
