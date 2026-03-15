# @mme/typescript-example-1 — Application package

This package demonstrates the **application** pattern in the monorepo: a runnable
service or CLI that _consumes_ published libraries but is not itself published to npm.

## Why tsc build?

Applications in this monorepo are built with `tsc` file-by-file into `dist/`.
No bundling is applied — `node_modules` remains the dependency resolution mechanism
at runtime. This keeps the build output transparent and debuggable, and matches
how most Node.js services are deployed (container image with `node_modules`
installed via `pnpm install --prod`).

For deployment scenarios that require a single-file artifact (Lambda, edge
functions), swap `tsc` for `esbuild` or `tsup --bundle` in the `build` script.

## Development

In development, skip the build step entirely. `tsx` runs TypeScript natively and
respects `tsconfig.json` path aliases, so changes in sibling library packages
are picked up immediately from source:

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
