/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { apiGenerator } = require('../generators/module/api/default-api-generator');
const {
  componentFolderGenerator,
} = require('../generators/module/components/default-component-folder-generator');
const {
  assetsFolderGenerator,
} = require('../generators/module/assets/default-assets-folder-generator');
const {
  hooksFolderGenerator,
} = require('../generators/module/hooks/default-hooks-folder-generator');

const createModule = [
  ...apiGenerator,
  ...componentFolderGenerator,
  ...assetsFolderGenerator,
  ...hooksFolderGenerator,
];

module.exports = {
  createModule,
};
