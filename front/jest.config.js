const config = {
  verbose: true,
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  // the following line is needed in order to grab modules from the
  // src folder without the need to write them relatively
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootdir>/src'],
  transformIgnorePatterns: ['node_modules'],
  resetMocks: true,
};

module.exports = config;
