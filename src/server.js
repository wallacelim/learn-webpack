const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();

const config = require("./webpack.config.js");
const compiler = webpack(config);

// Instruct webpack to use the webpack.config.js + webpack-dev-middleware
app.use(
  webpackDevMiddleware(compiler, { publicPath: config.output.publicPath })
);

// Serve files on port 3000
app.listen(3000, () => {
  console.log("App listening on port 3000...");
});
