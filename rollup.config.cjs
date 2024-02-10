const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");

const packageJson = require("./package.json");

module.exports = {
  input: "src/index.tsx", // Entry point of your application
  output: [
    {
      file: "dist/bundle.js", // Output bundle
      format: "cjs" // CommonJS module format
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    }
  ],
  plugins: [
    resolve(), // Resolve node_modules
    commonjs(), // Convert CommonJS modules to ES6
    typescript() // Compile TypeScript files
  ]
};
