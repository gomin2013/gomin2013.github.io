# gomin2013.github.io

Home page of **Gomin Apps** — free, open-source macOS apps for developers and makers. Sites in 12 languages.

| App | Edits | Website | Source |
|---|---|---|---|
| Hosts Manager | `/etc/hosts` | [gomin2013.github.io/hosts-manager](https://gomin2013.github.io/hosts-manager/) | [gomin2013/hosts-manager](https://github.com/gomin2013/hosts-manager) |
| Git Exclude Manager | `.git/info/exclude` | [gomin2013.github.io/git-exclude-manager](https://gomin2013.github.io/git-exclude-manager/) | [gomin2013/git-exclude-manager](https://github.com/gomin2013/git-exclude-manager) |
| AI Voice Manager | AI voice-overs (Gemini TTS) | [gomin2013.github.io/ai-voice-manager](https://gomin2013.github.io/ai-voice-manager/) | [gomin2013/ai-voice-manager](https://github.com/gomin2013/ai-voice-manager) |

Each app publishes its own site from `main` → `/docs`; this repo serves `/` and `404.html`, which sends
mistyped or cut-off app links (e.g. `/Hosts-Manager/`, `/git-exclude-`) to the right site.
Test it with `node test-404.js`.

The apps are free. Support them on [GitHub Sponsors](https://github.com/sponsors/gomin2013).
