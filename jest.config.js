module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>config/enzyme.config.js', '<rootDir>config/jest.config.js'],
  globals: {
    ENV: {
      GOOGLE_MAPS_API_KEY: 'Test Key',
    },
  },
};
