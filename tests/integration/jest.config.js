/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')
const rootPath = resolve(__dirname, '../..')
const baseConfig = require(`${rootPath}/jest.config.js`)

module.exports = {
  ...baseConfig,
  displayName: 'integration tests',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testMatch: ['<rootDir>/tests/integration/**/*.spec.ts']
}
