/* eslint-disable no-undef */
const folderGenerator = {
  type: 'add',
  path: './src/modules/{{camelCase module}}/assets/.gitkeep',
  templateFile: './plopfiles/templates/module/assets/.gitkeep.hbs',
};

const assetsFolderGenerator = [folderGenerator];

module.exports = { assetsFolderGenerator };
