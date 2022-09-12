/* eslint-disable no-undef */
const indexGenerator = {
  type: 'add',
  path: './src/modules/{{camelCase module}}/index.ts',
  templateFile: './plopfiles/templates/module/index.ts.hbs',
};


const indexFileGenerator = [indexGenerator];

module.exports = { indexFileGenerator };
