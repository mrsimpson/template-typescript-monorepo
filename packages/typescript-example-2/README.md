# @mme/typescript-example-2 — Library package

This package demonstrates the **library** pattern in the monorepo: a module
designed to be consumed by other packages _and_ published to npm.

## Why tsc build?

Libraries are built with `tsc` because type fidelity matters for consumers.
`tsc` preserves generics exactly, emits `.d.ts` declaration files, and supports
composite project references — none of which are guaranteed by transpile-only
bundlers like esbuild or swc. Consumers get accurate autocomplete, correct
narrowing, and no `any`-erasure surprises.

The output is pure ES modules — no bundling, no tree-shaking. Bundling is the
consumer's responsibility; they know their own target environment.

## Development

In sibling packages, `tsconfig.json` path aliases point directly to `src/` so
no rebuild is required during development. For standalone iteration:

```sh
pnpm dev   # tsx watch src/index.ts
```

## License

MIT License

Copyright (c) 2023 Luke Baker

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
