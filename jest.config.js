module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
  ],
  transform: {
    '^.+\\.[t|j]sx?$': '<rootDir>/node_modules/babel-jest',
  },
  testEnvironment: 'node',
  verbose: true,
};
