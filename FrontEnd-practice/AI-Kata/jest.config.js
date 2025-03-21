module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    transform: {
      '^.+\\.js$': 'babel-jest'
    },
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/styleMock.js'
    }
  };