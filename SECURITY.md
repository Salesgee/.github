# Security Policy

This repository holds the Salesgee GitHub organization profile, community health files, and public
branding assets. Treat all contributions as security-sensitive because this is a public repository.

## Do Not Commit

- Secrets, passwords, private keys, tokens, certificates, or copied `.env` values.
- Customer records, order records, merchant data, payment references, or private operational data.
- Internal-only hostnames, IP addresses, account IDs, access paths, or private URLs.
- Screenshots that expose credentials, customer data, private URLs, tokens, dashboards, or internal
  project data.
- Any file that is not genuinely public-facing organization profile content or repository tooling.

## Reporting A Security Issue

Do not open a public issue for sensitive security findings.

Report the issue through the approved internal team channel and include:

- A short description of the exposure or risk.
- The affected file, workflow, or asset.
- Whether the value is still active.
- Any immediate mitigation already taken.

## Local Security Checks

Run the local repository scan before pushing:

```sh
bun run security:forbidden-patterns
```

CI also runs secret and vulnerability scans on pull requests.
