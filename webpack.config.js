const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   entry: "./src/index.js",

// output: {
//   path: path.join(__dirname, "/build"),
//   filename: "bundle.js",
// },

// plugins: [
//   new HTMLWebpackPlugin({
//     template: "./public/index.html",
//   }),
// ],

//   module: {
//     rules: [ //rules for the compiler to follow
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//               presets: ['@babel/preset-env', '@babel/preset-react'],
//               plugins: '@babel/plugin-transform-runtime',
//           }
//         }
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
// };

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  target: "web",
  devServer: {
    port: "3000",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
};
