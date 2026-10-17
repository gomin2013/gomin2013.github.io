# gomin2013.github.io

Home page of **Gomin Apps** — free, open-source macOS apps for developers. 12 languages.

| App | Edits | Website | Source |
|---|---|---|---|
| Hosts Manager | `/etc/hosts` | [gomin2013.github.io/hosts-manager](https://gomin2013.github.io/hosts-manager/) | [gomin2013/hosts-manager](https://github.com/gomin2013/hosts-manager) |
| Git Exclude Manager | `.git/info/exclude` | [gomin2013.github.io/git-exclude-manager](https://gomin2013.github.io/git-exclude-manager/) | [gomin2013/git-exclude-manager](https://github.com/gomin2013/git-exclude-manager) |

Each app publishes its own site from `main` → `/docs`; this repo serves `/` and `404.html`, which sends
mistyped or cut-off app links (e.g. `/Hosts-Manager/`, `/git-exclude-`) to the right site.
Test it with `node test-404.js`.
