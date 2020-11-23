/**
 * Screen Generator
 */

const screenExists = require('../utils/screenExists');

module.exports = {
  description: 'Add a screen ',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return screenExists(value)
            ? 'A component or screen with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: data => {
    const actions = [
      {
        type: 'add',
        path: '../src/screens/{{properCase name}}/index.tsx',
        templateFile: './screen/index.ts.hbs',
        abortOnFail: true,
      },
    ];

    // If they want actions and a reducer, generate actions.ts, constants.ts,
    // reducer.ts and the corresponding tests for actions and the reducer
      // Actions
      actions.push({
        type: 'add',
        path: '../src/screens/{{properCase name}}/actions.ts',
        templateFile: './screen/actions.ts.hbs',
        abortOnFail: true,
      });

      // Constants
      actions.push({
        type: 'add',
        path: '../src/screens/{{properCase name}}/constants.ts',
        templateFile: './screen/constants.ts.hbs',
        abortOnFail: true,
      });

      // Selectors
      actions.push({
        type: 'add',
        path: '../src/screens/{{properCase name}}/selectors.ts',
        templateFile: './screen/selectors.ts.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../src/screens/{{properCase name}}/reducer.ts',
        templateFile: './screen/reducer.ts.hbs',
        abortOnFail: true,
      });

      // saga
      actions.push({
        type: 'add',
        path: '../src/screens/{{properCase name}}/saga.ts',
        templateFile: './screen/saga.ts.hbs',
        abortOnFail: true,
      });



    return actions;
  },
};
