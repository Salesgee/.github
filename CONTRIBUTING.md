# Contributing

Thank you for contributing to the Salesgee GitHub organization profile.

This repository is special-cased by GitHub: [`profile/README.md`](profile/README.md) renders as the
public profile page at [github.com/Salesgee](https://github.com/Salesgee), and this repository's own
[`README.md`](README.md) is what visitors see when they open the repository itself. Branding and
profile assets referenced by either file live under [`public`](public).

## Contribution Standard

- Keep `profile/README.md` and `README.md` scoped to their own purpose. The organization profile is
  a public-facing product and company introduction, not a full docs index.
- Write all content in Markdown.
- Use clear, concise language and avoid unexplained acronyms.
- Keep copy aligned with Salesgee's current positioning as an ecommerce management platform for
  African sellers and product-based businesses.
- Optimize new images before committing them and reference them with a relative path under
  `public/`.
- Never commit secrets, credentials, private keys, access tokens, `.env` files, customer data, or
  private internal values.

## Setup

Install dependencies with Bun:

```sh
bun install
```

Husky is installed through the `prepare` script:

```sh
bun run prepare
```

## Local Checks

Format all Markdown files:

```sh
bun run format
```

Check Markdown formatting:

```sh
bun run format:check
```

Run the forbidden-pattern scan:

```sh
bun run security:forbidden-patterns
```

## Branch Naming

Branch names should follow a flexible Conventional Commit style:

```text
<type>/<optional-scope>/<short-description>
```

Examples:

```text
docs/profile-product-positioning
fix/readme-app-link
assets/banner-refresh
chore/ci/profile-checks
security/docs-reporting-update
```

Use the same conventional types expected in commits and PR titles, such as `feat`, `fix`, `docs`,
`style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, and `revert`.

The scope is optional so engineers can create multiple parallel branches freely while keeping branch
intent readable.

## Commit Messages

This repository uses Conventional Commits:

```text
type(scope): short description
```

Examples:

```text
docs(profile): refresh product positioning
assets: add updated organization banner
chore(tooling): add markdown formatting checks
fix(readme): correct app link
```

Common types are:

- `docs`: profile, README, or community-health content changes.
- `assets`: images, logos, or other public brand assets.
- `chore`: tooling, repository maintenance, or non-user-facing updates.
- `fix`: corrections to inaccurate or broken content.
- `ci`: workflow and automation changes.
- `security`: security documentation, checks, or hardening references.

## Pull Requests

Before opening a pull request:

- Run `bun run format:check`.
- Run `bun run security:forbidden-patterns`.
- Confirm no secrets, private keys, tokens, private URLs, customer data, or unapproved internal
  values were added.
- Preview how any new or changed image renders on GitHub's profile page in both light and dark mode.

## Review Expectations

Reviewers should check for accuracy, tone, formatting, security exposure, and whether the change
reads well as the first impression of Salesgee on GitHub.
