/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const {
  commandWithInputModule,
  commandWithInputComponent,
} = require('./plopfiles/commands/default-commands');
const { createComponentAction } = require('./plopfiles/plopfile-actions/create-component');
const { createModule } = require('./plopfiles/plopfile-actions/create-module');

module.exports = (plop) => {
  plop.setWelcomeMessage('Select a template to create');

  plop.setGenerator('NEW COMPONENT', {
    description: 'Generate a new component',
    prompts: [commandWithInputComponent],
    actions: createComponentAction,
  });

  plop.setGenerator('NEW MODULE', {
    description: 'Generate a new module',
    prompts: [commandWithInputModule],
    actions: createModule,
  });
}
