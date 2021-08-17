module.exports = {
  displayName: "api-utility",
  preset: "../../../jest.preset.js",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../../coverage/libs/api/utility",
  setupFilesAfterEnv: ["<rootDir>/src/lib/test/setupFilesAfterEnv.ts"],
  globalSetup: "<rootDir>/src/lib/test/globalSetup.ts",
};
