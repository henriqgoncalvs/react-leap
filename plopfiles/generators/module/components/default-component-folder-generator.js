/* eslint-disable no-undef */
const folderGenerator = {
  type: 'add',
  path: './src/modules/{{camelCase module}}/components/.gitkeep',
  templateFile: './plopfiles/templates/module/components/default-component-folder-generator.hbs',
};


const componentFolderGenerator = [folderGenerator];

module.exports = { componentFolderGenerator };
