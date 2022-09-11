/* eslint-disable no-undef */
const indexGenerator = {
  type: 'add',
  path: './src/components/common/{{properCase component}}/index.ts',
  templateFile: './plopfiles/templates/component/index.ts.hbs',
};

const componentComponentGenerator = {
  type: 'add',
  path: './src/components/common/{{properCase component}}/{{properCase component}}.tsx',
  templateFile: './plopfiles/templates/component/component.tsx.hbs',
};

const historyGenerator = {
  type: 'add',
  path: './src/components/common/{{properCase component}}/{{properCase component}}.stories.tsx',
  templateFile: './plopfiles/templates/component/component.stories.tsx.hbs',
};

const componentGenerator = [indexGenerator, componentComponentGenerator, historyGenerator];

module.exports = { componentGenerator };
