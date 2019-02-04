module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  "plugins": [
    "cypress"
  ],

  "env": {
    "cypress/globals": true
  },

  
  globals: {
    fetch: false
  }
};
