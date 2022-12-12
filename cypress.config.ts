import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = {
    projectId: "zcyqbj",
    // The rest of the Cypress config options go here...
  }