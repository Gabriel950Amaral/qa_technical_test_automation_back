const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'tq93d8',
  screenshot: false,
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://sandbox.melhorenvio.com.br/api/v2/users',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },

  
}),
{
  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/results"
  }
}
