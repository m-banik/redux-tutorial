// Konfiguracja Webpack'a
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const eslintOptions = {
  context: path.join(__dirname, 'src'),
  extensions: ['js', 'jsx', 'ts', 'tsx'],
  emitWarning: true
};

type WebpackEnvType = {
  mode?: string;
  WEBPACK_SERVE?: boolean;
  WEBPACK_BUNDLE?: boolean;
};

module.exports = (env: WebpackEnvType) => {
  return {
    entry: {
      index: path.join(__dirname, 'src')
    },
    output: {
      publicPath: '',
      path: path.join(__dirname, 'build'),
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js'
    },
    target: 'web',
    mode: env.mode === 'production' ? 'production' : 'development',
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
          terserOptions: {
            format: {
              comments: false
            }
          },
          extractComments: false
        }),
        new CssMinimizerPlugin()
      ],
      splitChunks: {
        chunks: 'all',
        maxSize: 244000
      }
    },
    resolve: {
      mainFiles: ['index'],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      modules: ['node_modules'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.join(__dirname, 'tsconfig.json')
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'source-map-loader']
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            env.mode === 'production'
              ? MiniCssExtractPlugin.loader
              : 'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          exclude: /node_modules/,
          type: 'asset/resource'
        }
      ]
    },
    devtool: env.mode === 'production' ? false : 'eval-source-map',
    devServer: {
      publicPath: '/',
      port: 3000,
      historyApiFallback: true,
      open: true,
      liveReload: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html')
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[chunkhash].css',
        chunkFilename: '[name].[chunkhash].css'
      }),
      new ForkTsCheckerWebpackPlugin(),
      new ESLintPlugin(eslintOptions)
    ]
  };
};
