const path = require("path");
const SRC_DIR = path.join(__dirname, "/src");
const DIST_DIR = path.join(__dirname, "/public");
module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
<<<<<<< HEAD
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        enforce: "pre",
        loader: "eslint-loader"
      },
=======
  module : {
    rules : [
      // {
      //   test: /\.(js|mjs|jsx)$/,
      //   enforce: 'pre',
      //   loader: 'eslint-loader'
      // },
>>>>>>> 9ed0dd512e8f7b3499447899fda5a1f9a382c070
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        include: SRC_DIR,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: DIST_DIR,
    compress: true,
    port: 9000,
    allowedHosts: [
      '.amazonaws.com'
    ]
  }
};
