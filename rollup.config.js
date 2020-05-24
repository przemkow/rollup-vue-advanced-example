import typescript from "rollup-plugin-typescript2";
import VuePlugin from "rollup-plugin-vue";
import pkg from "./package.json";
import css from "rollup-plugin-css-only";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: "src/index.ts",
    output: {
      file: pkg.module,
      format: `esm`
    },
    plugins: [
      typescript({
        tsconfig: "tsconfig.build.json",
        useTsconfigDeclarationDir: true
      }),
      // Compile Vue for browser, ignore CSS (handled in cjs build)
      VuePlugin({
        css: false
      }),
      css({
        output: false
      }),
      // transpile esnext to es5 (IE support)
      getBabelOutputPlugin({
        presets: ["@babel/preset-env"]
      })
    ]
  },
  // SSR build.
  {
    input: "src/index.ts",
    output: {
      file: pkg.main,
      format: `cjs`
    },
    plugins: [
      typescript({
        tsconfig: "tsconfig.build.json",
        useTsconfigDeclarationDir: true
      }),
      // Compile Vue for node(SSR), generate CSS file
      VuePlugin({
        css: false,
        template: {
          optimizeSSR: true
        }
      }),
      css({
        output: pkg.style
      }),
      // transpile esnext to node 12 compatible build.
      getBabelOutputPlugin({
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                node: "12"
              }
            }
          ]
        ]
      })
    ]
  }
];
