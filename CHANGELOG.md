# Changelog

## 3.0.0 (unreleased)

### ⚠️ Breaking changes

- **`markdown-to-jsx` peer dependency is now `>=9.0.0`** (was `>=7.0.0`). If your app pins `markdown-to-jsx` v7 or v8, you must upgrade it alongside `mui-markdown`. mui-markdown now imports from the `markdown-to-jsx/react` entry point (the root React export is deprecated upstream and will be removed in markdown-to-jsx v10).
- **Raw HTML handling changed (upstream markdown-to-jsx v9 security fix).** Dangerous HTML tags in markdown content (`<script>`, `<iframe>`, `<object>`, `<embed>`, `<style>`, `<textarea>`, `<title>`, `<xmp>`, `<plaintext>`, `<noembed>`, `<noframes>`) are now **escaped and rendered as text** instead of being passed through. `javascript:`/`vbscript:`/malicious `data:` URLs are also sanitized. Benign HTML (e.g. `<span style="...">`) still passes through.
  - **What to check:** if you intentionally render such tags from *trusted* markdown, pass `options={{ tagfilter: false }}` to restore the old behavior. For untrusted content, keep the new default.
- **Inline formatting no longer spans line breaks** (upstream CommonMark compliance). `*text\nacross lines*` now renders literal asterisks. Keep emphasis on one line or use HTML tags.
- **GFM task list items now render with a MUI `Checkbox`** instead of a raw `<input type="checkbox">`. Override the `input` key in `overrides` if you want different rendering.
- Note: markdown-to-jsx v9 requires React `>= 16`; mui-markdown's own peer range remains `react >= 17`.

### ✨ New features (opt-in, no behavior change unless enabled)

- **Table of contents extraction:** new `extractHeadings(markdown, options?)` export returns `{ text, level, id }[]` where `id` matches the anchor ids `MuiMarkdown` renders. Build your own TOC component from it — nothing is auto-rendered. See the README example.
- **Math support (KaTeX):** new `enableMath` prop plus `MathBlock` component (exported from `mui-markdown/client`) render ` ```math ` fenced blocks with [KaTeX](https://katex.org). `katex` is an optional dependency and is loaded lazily on the client, so bundle size is unchanged for non-users. Configure via `katexOptions`. Currently block math only (no inline `$...$`).
- **Footnotes** (`[^1]`) are now rendered natively by markdown-to-jsx v9, with mui-markdown's MUI `Link` styling applied to references.

### 🔧 Fixes / internal

- Restored bare code-fence flags (` ```js copiable hideLineNumbers `) which markdown-to-jsx v9 stopped passing to renderers; mui-markdown now recovers them from the AST `infoString`, so all documented Enhanced Code Block features keep working.
- Code fence attribute casing is preserved in v9 (`hideLineNumbers` is no longer lowercased); both spellings are accepted.
- Added an automated test suite (vitest) covering overrides, options, code block features, mermaid routing, math routing, task lists, footnotes, HTML escaping, and `extractHeadings`.
- Dev dependency updates; `npm audit` is clean (`@rollup/plugin-terser` bumped to 1.x for the `serialize-javascript` advisory). `@rollup/plugin-typescript` is pinned to 12.1.2 — 12.3.0 breaks the build (declaration path validation).
- MUI note: `@mui/material` latest major is now 9.x; the peer range `>=5.0.0` already allows it, and the library is built/tested against 7.x. No peer change made.

### Migration from 2.x

1. Upgrade the peer: `npm i markdown-to-jsx@^9`.
2. If you relied on rendering `<script>`/`<iframe>`-class tags from markdown, add `options={{ tagfilter: false }}` (trusted content only).
3. If you relied on emphasis spanning multiple lines, put it on one line.
4. If you override `pre`/`code` or use custom `renderRule`, re-test code blocks: v9 emits both `language-x` and `lang-x` classes.
5. Everything else — component API, overrides, `getOverrides`, MDX helpers, mermaid, syntax highlighting — is unchanged.

## 2.1.1

- See git history (no changelog was kept before 3.0.0).
