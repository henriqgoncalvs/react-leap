// eslint-disable-next-line no-undef
module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your component name?',
    },
    {
      type: 'input',
      name: 'folder',
      message: 'In what folder you want your component?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../src/components/{{folder}}/{{properCase name}}/index.ts',
      templateFile: 'templates/component/index.ts.hbs',
    },
    {
      type: 'add',
      path: '../src/components/{{folder}}/{{properCase name}}/{{properCase name}}.tsx',
      templateFile: 'templates/component/component.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/components/{{folder}}/{{properCase name}}/{{properCase name}}.stories.tsx',
      templateFile: 'templates/component/component.stories.tsx.hbs',
    },
  ],
}
