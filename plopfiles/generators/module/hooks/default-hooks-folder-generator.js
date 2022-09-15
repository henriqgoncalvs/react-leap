/* eslint-disable no-undef */
const folderGenerator = {
  type: 'add',
  path: './src/modules/{{camelCase module}}/hooks/.gitkeep',
  templateFile: './plopfiles/templates/module/hooks/.gitkeep.hbs',
};

const hooksFolderGenerator = [folderGenerator];

module.exports = { hooksFolderGenerator };
