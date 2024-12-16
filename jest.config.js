module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
