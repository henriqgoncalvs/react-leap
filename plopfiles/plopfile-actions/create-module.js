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
const {
  pageFolderGenerator,
} = require('../generators/module/pages/default-pages-generator');
const { routesGenerator } = require('../generators/module/routes/default-routes-generator');
const { typesFileGenerator } = require('../generators/module/types/default-types-generator');
const { indexFileGenerator } = require('../generators/module/default-index-generator');
const { utilsFolderGenerator } = require('../generators/module/utils/default-utils-folder-generator');

const createModule = [
  ...apiGenerator,
  ...componentFolderGenerator,
  ...assetsFolderGenerator,
  ...hooksFolderGenerator,
  ...pageFolderGenerator,
  ...routesGenerator,
  ...typesFileGenerator,
  ...indexFileGenerator,
  ...utilsFolderGenerator,
];

module.exports = {
  createModule,
};
