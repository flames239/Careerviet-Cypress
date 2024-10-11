const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    excludeSpecPattern: ["**/1-getting-started", "**/2-advanced-examples"],
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    baseUrl: "https://careerviet.vn",
    video: false,
    screenshotOnRunFailure: false,
    env: {
      EmpBaseUrl: "https://careerviet.vn/vi/employers"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});