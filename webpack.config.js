const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  target: "web",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  mode: "development",
  plugins: [new Dotenv()],
};
