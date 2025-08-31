const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    specPattern: [
      "cypress/e2e/**/*.cy.{js,ts}",   // testes E2E
      "cypress/api/**/*.cy.{js,ts}"    // testes de API
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
