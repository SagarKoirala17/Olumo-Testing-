const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://staging.olumo.com',
    defaultCommandTimeout: 16000,
  },
});
