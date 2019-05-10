const path = require("path");
const SRC_DIR = path.join(__dirname, "/src");
const DIST_DIR = path.join(__dirname, "/public");
module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        enforce: "pre",
        loader: "eslint-loader"
      },
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        include: SRC_DIR,
<<<<<<< HEAD
        use: ['style-loader', 'css-loader']
=======
        use: ["style-loader", "css-loader"]
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
      }
    ]
  },
  devServer: {
    contentBase: DIST_DIR,
    compress: true,
    port: 9000,
    allowedHosts: [".amazonaws.com"]
  }
};
