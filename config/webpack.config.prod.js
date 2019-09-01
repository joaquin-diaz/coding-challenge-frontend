const path = require('path');
const merge = require('webpack-merge');
const devConfig = require('./webpack.config');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = merge(devConfig, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../www'),
    filename: 'bundle.[name].[chunkhash].js',
    publicPath: '/',
    chunkFilename: '[name].[chunkhash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
      },
    },
  },
  plugins: [
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
});
