/* eslint-disable no-undef */
const indexGenerator = {
  type: 'add',
  path: './src/modules/{{camelCase module}}/api/index.ts',
  templateFile: './plopfiles/templates/module/api/api-index.hbs',
};
const typesGenerator = {
  type: 'add',
  path: './src/modules/{{camelCase module}}/api/types.ts',
  templateFile: './plopfiles/templates/module/api/api-types.hbs',
};

const apiGenerator = [indexGenerator, typesGenerator];

module.exports = { apiGenerator };
