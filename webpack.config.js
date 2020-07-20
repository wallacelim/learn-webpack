const path = require("path");

module.exports = {
  // Entry point for the webpack bundler to build its internal dependency graph
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
