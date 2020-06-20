module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './test',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.ts'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  reporters: ['default', 'jest-junit']
};
