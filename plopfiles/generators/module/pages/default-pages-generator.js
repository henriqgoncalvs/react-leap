/* eslint-disable no-undef */
const pageGenerator = {
  type: 'add',
  path: './src/modules/{{camelCase module}}/pages/{{properCase module}}Page.tsx',
  templateFile: './plopfiles/templates/module/pages/pages.hbs',
};
const indexGenerator = {
  type: 'add',
  path: './src/modules/{{camelCase module}}/pages/index.ts',
  templateFile: './plopfiles/templates/module/pages/pages-index.hbs',
};

const pageFolderGenerator = [indexGenerator, pageGenerator];

module.exports = { pageFolderGenerator };
