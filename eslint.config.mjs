import js from "@eslint/js";
import { parser, configs } from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default [
  // Global: anchor tsconfigRootDir so typescript-eslint finds the right tsconfig
  // when there are multiple tsconfig.json files across the monorepo
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  js.configs.recommended,
  ...configs.recommended,
  prettier,
  {
    // TypeScript type-checking for root-level TS files
    files: ["**/*.{ts,tsx,mts,cts}"],
    languageOptions: {
      parser,
      parserOptions: {
        project: ["./tsconfig.json", "./docs/.vitepress/tsconfig.json"]
      }
    }
  },
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      ".pnpm-store/**",
      "pnpm-lock.yaml",
      "packages/**",
      "docs/.vitepress/cache/**"
    ]
  }
];
