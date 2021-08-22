# Gitflow

[](https://nvie.com/img/git-model@2x.png)

## Resource Branches

*Resource Branches* must be created from **develop**. They can be:

- `build`
- `chore`
- `ci`
- `docs`
- `feat`
- `fix`
- `perf`
- `refactor`
- `revert`
- `style`
- `test`

After the task is finished, the developer should upload a pull request to Develop and wait for Code Review for the amount of devs defined at the beginning of the project.

## **Develop**

No developer will be able to upload code on this branch directly.

Once the *resource branch* has been approved, it should be merged into this branch which will serve as an accumulator of new implementations.

Ideally this branch has a CD action, Netlify is recommended for that.

## **Homolog**

Since develop already has all the functionality mapped to a particular release, create a release/1.0.0 branch ([Semantic versioning](https://semver.org/)). Created this release branch, go up to an approval environment (which is not develop/staging). You can name it homolog, QA, etc. Remembering that the names of the environments are the least, but the ideal is that these environments are accessible only internally, on the network or behind an authentication where it restricts external access. In each environment it is also ideal to have its own database in order not to "dirty" your production data.

Also keep in mind to ask developers to code so that it is easy to mock e2e requests and automated tests (end-to-end, not unitary or integration, testing using a browser to interact on screen) because here, in addition to the QA review, it would also be good to leave some e2e test automator running.

## **Production**

Attested (approved) by QA and by e2e, merge in main, create the tag with the version given in the approval and be happy with your application fully reviewed and deployed :D

References:

[Fluxo de trabalho de Gitflow | Atlassian Git Tutorial](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow) - _MUST READ_
[A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)

## Commit Structure

Every commit message is linted by [commitlint](https://github.com/conventional-changelog/commitlint), make sure to check the [Semantic Commit Messages](docs/semantic-commit-messages.md) guide.
