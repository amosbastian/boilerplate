module.exports = {
  displayName: "api",
  preset: "../../jest.preset.js",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory: "../../coverage/apps/api",
  setupFilesAfterEnv: ["<rootDir>/src/test/setupFilesAfterEnv.ts"],
  globalSetup: "<rootDir>/src/test/globalSetup.ts",
};
