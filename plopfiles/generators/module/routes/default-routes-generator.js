/* eslint-disable no-undef */
const routeGenerator = {
  type: 'add',
  path: './src/modules/{{camelCase module}}/routes/index.tsx',
  templateFile: './plopfiles/templates/module/routes/routes-index.hbs',
};


const routesGenerator = [routeGenerator];

module.exports = { routesGenerator };
