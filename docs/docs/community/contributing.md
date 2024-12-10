---
sidebar_position: 2
---

# 🎃 Contributing

**Country-Info-Data** is our way to simplify working with geographical data in open-source and personal projects. It's already been used in various projects, with plans for more integrations in the future. If you're interested in contributing to **Country-Info-Data** , we hope this guide makes the process of getting involved clear and easy.

For individuals, communities, and businesses/companies interested in learning how to manage and contribute to an open source project, the [Open Source Guides](https://opensource.guide/) website offers a collection of resources. Both newcomers to open source and contributors will find the following guides particularly helpful:

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)

- [Building Welcoming Communities](https://opensource.guide/building-community/)

## Code of Conduct

**Country-Info-Data** has adopted a Code of Conduct that project participants are expected to follow. To understand what behaviors will and won't be accepted, please read [the entire document](https://www.contributor-covenant.org/version/1/4/code-of-conduct/).

## Become Involved

Contributions to **Country-Info-Data** can be made in a variety of methods, many of which do not require creating any code. Here are some suggestions to get you started:

- Simply start using Country-Info-Dat. Go through the [Getting Started guide](/docs/getting-started/installation). Does everything work as expected? If not, we're always looking for improvements. Let us know by opening an issue.

- Look through the [open issues](https://github.com/copy-ninja1/country-info-data/issues). Offer workarounds, ask for clarification, or suggest labels. Help triage issues.

- If you find an issue you would like to fix, open a pull request. Issues tagged as [Good first issue](https://github.com/copy-ninja1/country-info-data/labels/Good%20first%20issue) are a good place to get started.

- Read through the [Country-Info-Data docs](/docs/intro). If you find anything that is confusing or can be improved, you can click "Edit this page" at the bottom of most docs, which takes you to the GitHub interface to make and propose changes.

- Take a look at the [features requested](https://github.com/copy-ninja1/country-info-data/labels/feature) by others in the community and consider opening a pull request if you see something you want to work on.

Contributions are very welcome.

### Triaging Issues and Pull Requests

One great way you can contribute to the project without writing any code is to help triage issues and pull requests as they come in.

- Ask for more information if you believe the issue does not provide all the details required to solve it.
- Flag issues that are stale or that should be closed.
- Suggest labels that can help categorize issues.
- Review code.

### Development Process

**Country-Info-Data** uses GitHub as its source of truth. All changes will be public from the beginning.

All pull requests will be checked by the continuous integration system, GitHub actions. There are unit tests, end-to-end tests, performance tests, style tests, and much more.

## Issues

When opening a new issue, always make sure to fill out the issue template. **This step is very important!** Not doing so may result in your issue not being managed in a timely fashion. Don't take this personally if this happens, and feel free to open a new issue once you've gathered all the information required by the template.

### Bugs

We use [GitHub Issues](https://github.com/copy-ninja1/country-info-data/issues) for our public bugs. If you would like to report a problem, take a look around and see if someone already opened an issue about it. If you are certain this is a new, unreported bug, you can submit a bug report.

- **Provide reproduction steps:** List all the steps necessary to reproduce the issue. The person reading your bug report should be able to follow these steps to reproduce your issue with minimal effort.

- **One issue, one bug:** Please report a single bug per issue.

If you're fixing a bug, feel free to submit a pull request immediately, but we recommend opening an issue to explain what you're addressing. This helps us track the problem, even if the specific fix isn’t accepted.

### Feature Requests

If you want to suggest a new feature or enhancement but aren't ready to submit a pull request, you can create an issue using the feature template as a **detailed RFC**.

### Proposals

If you're planning significant changes to existing implementations, we suggest submitting an issue using the proposal template. This allows us to align on the idea before you invest too much time. Such issues should be rare.

### Claiming Issues

We have a list of [beginner-friendly issues](https://github.com/copy-ninja1/country-info-data/labels/Good%20first%20issue) to help you get your feet wet in the Country-Info-Data codebase and familiar with our contribution process. This is a great place to get started.

Apart from the `good first issue`, the following labels are also worth taking a looking at:

- **`help wanted:`** if you have specific knowledge in one domain, working on these issues can make your expertise shine.

- **`status: accepting pr:`** community contributors can feel free to claim any of these.

If you'd like to tackle an issue, leave a message saying, "I'd like to work on this," and we'll assign it to you and mark it as "claimed." Please submit a pull request within seven days, so we can reassign it if you're unavailable.

Alternatively, when creating an issue, you can select the "self-service" checkbox to indicate that you want to work on it. This will automatically mark the issue as "claimed."

## Development

### Online one-click setup for contributing

You can use Gitpod (a free, online, VS Code-like IDE) for contributing. With a single click, it will launch a workspace automatically:

- clone the Country-Info-Data repo.
- install the dependencies.
- run `npm run start`

So that you can start contributing straight away.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/copy-ninja1/country-info-data)

You can also try using the new [github.dev](https://github.dev/copy-ninja1/country-info-data) feature. While you are browsing any file, changing the domain name from `github.com` to `github.dev` will turn your browser into an online editor. You can start making changes and send pull requests right away.

### Installation

- Ensure you have [Npm](https://www.npmjs.com/) installed.
- After cloning the repository, run `npm  install` in the root of the repository. This will install all dependencies as well as build all local packages.
- To start a development server, run `npm run start`.

### Code Conventions

- **Most important: Look around.** Match the style you see used in the rest of the project. This includes formatting, naming files, naming things in code, naming things in documentation, etc.
- "Attractive"
- We do have Prettier (a formatter) and ESLint (a syntax linter) to catch most stylistic problems. If you are working locally, they should automatically fix some issues during every git commit.
- **For documentation**: Do not wrap lines at 80 characters - configure your editor to soft-wrap when editing code or documentation.

Don't stress too much about the styles—the maintainers will assist in refining them during the code review process.

## Pull Requests

You've decided to contribute by opening a pull request—thank you for your time and effort! We appreciate it and will do our best to review and collaborate with you to get it merged.

Working on your first Pull Request? You can learn how from this free video series:

[**How to Contribute to an Open Source Project on GitHub**](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

Please make sure the following is done when submitting a pull request:

1. **Keep your PR small.** Small pull requests (~300 lines of diff) are much easier to review and more likely to get merged. Make sure the PR does only one thing, otherwise please split it.
2. **Use descriptive titles.** It is recommended to follow this [commit message style](#semantic-commit-messages).
3. **Test your changes.** Describe your [**test plan**](#test-plan) in your pull request description.

All pull requests should be opened against the `main` branch.

We have automated systems in place that run tests to catch mistakes, and the maintainers will review your code and fix any obvious issues. These systems are designed to minimize the hassle for you. While following the checklist can save time, your code contributions are our priority over rigid procedures.

### Semantic Commit Messages

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional. If your change is specific to one/two methods or feature, consider adding the scope. Scopes should be brief but recognizable.

The various types of commits:

- `feat`: a new API or behavior **for the end user**.
- `fix`: a bug fix **for the end user**.
- `docs`: a change to the website or other Markdown documents in our repo.
- `refactor`: a change to production code that leads to no behavior difference, e.g. splitting files, renaming internal variables, improving code style...
- `test`: adding missing tests, refactoring tests; no production code change.
- `chore`: upgrading dependencies, releasing new versions... Chores that are **regularly done** for maintenance purposes.
- `misc`: anything else that doesn't change production code, yet is not `test` or `chore`. e.g. updating GitHub actions workflow.

Do not get too stressed about PR titles, however. Your PR will be squash-merged and your commit to the `main` branch will get the title of your PR, so commits within a branch don't need to be semantically named. The maintainers will help you get the PR title right, and we also have a PR label system that doesn't equate with the commit message types. Your code is more important than conventions!

Example:

```
feat(core): allow overriding of webpack config
^--^^----^  ^------------^
|   |       |
|   |       +-> Summary in present tense. Use lower case not title case!
|   |
|   +-> The package(s) that this change affected.
|
+-------> Type: see above for the list we use.
```

### Breaking Changes

When adding a new breaking change, follow this template in your pull request:

```md
### New breaking change here

- **Who does this affect**:
- **How to migrate**:
- **Why make this breaking change**:
- **Severity (number of people affected x effort)**:
```

### What Happens Next?

The core Country-Info-Data team will be monitoring pull requests. Do help us by keeping pull requests consistent by following the guidelines above.
