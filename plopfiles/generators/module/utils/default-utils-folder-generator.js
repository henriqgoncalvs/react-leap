/* eslint-disable no-undef */
const folderGenerator = {
  type: 'add',
  path: './src/modules/{{camelCase module}}/utils/.gitkeep',
  templateFile: './plopfiles/templates/module/utils/.gitkeep.hbs',
};


const utilsFolderGenerator = [folderGenerator];

module.exports = { utilsFolderGenerator };
