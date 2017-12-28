const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: [
    './src/index.jsx',
    './src/style.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.(sass|scss)$/,
          use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
  ]
};
