import { defineConfig, mergeConfig } from "vitest/config";
import { resolve } from "path";
import baseConfig from "../../vitest.config.js";

export default mergeConfig(
  baseConfig,
  defineConfig({
    resolve: {
      alias: {
        "@mme/typescript-example-2": resolve(
          __dirname,
          "../typescript-example-2/src/index.ts"
        )
      }
    }
  })
);
