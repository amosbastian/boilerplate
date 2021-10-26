module.exports = {
  displayName: "api-test",
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
  coverageDirectory: "../../../coverage/libs/api/test",
  setupFilesAfterEnv: ["<rootDir>/src/lib/setup-files-after-env/setupFilesAfterEnv.ts"],
  globalSetup: "<rootDir>/src/lib/global-setup/globalSetup.ts",
};
