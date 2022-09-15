/* eslint-disable no-undef */
const typesGenerator = {
  type: 'add',
  path: './src/modules/{{camelCase module}}/types/index.ts',
  templateFile: './plopfiles/templates/module/types/types-index.ts.hbs',
};

const typesFileGenerator = [typesGenerator];

module.exports = { typesFileGenerator };
