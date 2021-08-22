/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const componentGenerator = require('./templates/component/config.js');

module.exports = (plop) => {
  plop.setWelcomeMessage('Select a template to create');

  plop.setGenerator('Component 🧩', componentGenerator);
};
