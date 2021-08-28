# Project Structure

Most of the code lives in the `src` folder and looks like this:

```
src
|
+-- assets            # assets folder can contain all the static data such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- context           # all of the global contexts
|
+-- modules          # module based folders
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- routes            # routes configuration
|
+-- test              # test utilities and mock server
|
+-- types             # base types used accross the application
|
+-- utils             # shared utility functions
```

In order to scale the application in the easiest and most maintainable way, keep most of the code inside the `modules` folder, which should contain different module-based things. Every `module` folder should contain domain specific code for a specific module. This will allow you to keep functionalities scoped to a module and not mix it with the shared things. This is much easier to maintain than a flat folder structure with many files.

A module could have the following structure:

```
src/modules/awesome-module
|
+-- api         # exported API request declarations related to the module
|
+-- components  # components scoped to the module, not used anywhere else
|
+-- hooks       # hooks scoped to the module, not used anywhere else
|
+-- pages      # pages components for the given module
|
+-- types       # typescript types for the given module
|
+-- utils       # utility functions used only by the module
|
+-- index.ts    # entry point for the module, it should serve as the public API of the given module and exports everything that should be used outside the module
```

A module folder could also contain other modules (if used only within the parent module) or be kept separated, it's a matter of preference.

Everything from a module should be exported from the `index.ts` file which behaves as the public API of the module.

You should import stuff from other modules only by using:

`import {AwesomeComponent} from "@/modules/awesome-module" `js

and not

`import {AwesomeComponent} from "@/modules/awesome-module/components/AwesomeComponent`

This can also be configured in the ESLint configuration to disallow the later import by the following rule:

```
{
    rules: {
        'no-restricted-imports': [
            'error',
            {
            patterns: ['@/modules/*/*'],
            },
        ],

    ...rest of the configuration
}
```

This was inspired by how [NX](https://nx.dev/) handles libraries that are isolated but available to be used by the other modules. Think of a module as a library or a module that is self-contained but can expose different parts to other modules via its entry point.
