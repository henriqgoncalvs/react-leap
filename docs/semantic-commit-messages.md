# Configuration

Inside `commitlint.config.js` file you can see the configuration. So if you are having some trouble if your commit messages, check the [Official Documentation](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum).

# Semantic Commit Messages

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

### Example

```
feat(user): add hat wobble
^--^        ^------------^
|           |
|           +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

## Types (based on the the [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)):

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `perf`: A code change that improves performance
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

## Types

Will often be related to the module (or module) you're working.

### Example

```
feat(auth): add login page

fix(user): fix pagination on users table
```

References:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html
- https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines
