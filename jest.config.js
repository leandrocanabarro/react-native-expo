module.exports = {
  preset: 'jest-expo',
  testPathIgnorePatterns: [
    '/node_modules',
    '/ios',
    '/android',
    '/miragejs',
    '/.vscode'
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    'jest-styled-components'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  collectCoverageFrom: [
    '<rootDir>/src/components/**',
    '<rootDir>/src/screens/**',
    '<rootDir>/src/hooks/**',
    '<rootDir>/src/store/**',
    '!<rootDir>/src/global/**',
    '!<rootDir>/miragejs/**',
    '!<rootDir>/index.*',
    '!<rootDir>/App.*',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.config.js',
    '!**/jest-unit.config.js',
    '!**/jest-integration.config.js',
  ],
}
