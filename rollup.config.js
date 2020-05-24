import typescript from "rollup-plugin-typescript2";
import VuePlugin from "rollup-plugin-vue";
import pkg from "./package.json";
import postcss from "rollup-plugin-postcss";
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
      // Compile Vue for browser, ignore CSS (handled in cjs build)
      VuePlugin({
        target: "browser",
        preprocessStyles: true
      }),
      typescript({
        tsconfig: "tsconfig.build.json",
        useTsconfigDeclarationDir: true,
        include: [/\.vue\?.*?lang=ts/, /\.tsx?$/]
      }),
      postcss({
        extract: false
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
      VuePlugin({
        target: "node",
        preprocessStyles: true
      }),
      typescript({
        tsconfig: "tsconfig.build.json",
        useTsconfigDeclarationDir: true,
        include: [/\.vue\?.*?lang=ts/, /\.tsx?$/]
      }),
      postcss({
        extract: "styles.css"
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
