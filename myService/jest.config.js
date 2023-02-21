const { compilerOptions } = require('./tsconfig.json')
const { pathsToModuleNameMapper } = require('ts-jest')

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  verbose: true,
  testEnvironment: 'jest-environment-node',
  coverageDirectory: 'coverage',
  collectCoverage: true,
  clearMocks: true,
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', 'util', 'src'],
  setupFilesAfterEnv: ['./jest.setup'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  testMatch: [
    '**/*.test.ts'
  ],
  globals: {
    NODE_ENV: 'test'
  }
}