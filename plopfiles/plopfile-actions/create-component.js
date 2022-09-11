/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { componentGenerator } = require('../generators/component/default-component-generator');

const createComponentAction = [...componentGenerator];

module.exports = {
  createComponentAction,
};
