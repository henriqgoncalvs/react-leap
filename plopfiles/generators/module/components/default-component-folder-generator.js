/* eslint-disable no-undef */
const folderGenerator = {
  type: 'add',
  path: './src/modules/{{camelCase module}}/components/.gitkeep',
  templateFile: './plopfiles/templates/module/components/.gitkeep.hbs',
};

const componentFolderGenerator = [folderGenerator];

module.exports = { componentFolderGenerator };
