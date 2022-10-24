const config = {
  verbose: true,
  roots: ['<rootDir>/src'],
  // the following line is needed in order to grab modules from the
  // src folder without the need to write them relatively
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootdir>/src'],
  transformIgnorePatterns: ['node_modules'],
  resetMocks: true,
  watchAll: false,
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  // setupFilesAfterEnv: ['<rootDir>/setup-jest.js'], // Ne fonctionne pas avec l'extension vscode jest runner TODO config
};

module.exports = config;
