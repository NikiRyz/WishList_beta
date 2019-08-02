const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const buildPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');

const getCSSLoader = (withModules = false) => [
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      modules: withModules && {
        localIdentName: '[local]__[hash:base64:5]',
      },
      importLoaders: 1,
      sourceMap: false,
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: [autoprefixer()]
    }
  },
  {
    loader: 'sass-loader',
    options: {
      includePaths: [srcPath]
    }
  }
];

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: buildPath,
      filename: 'bundle.js'
    },
    devtool: isProd ? 'none' : "eval-source-map",
    optimization: {
      minimizer: isProd ? [
        new TerserPlugin({
          parallel: true,
          sourceMap: true,
          cache: true
        })
      ] : []
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /.(s?css|sass)$/,
          exclude: /\.module\.(s?css|sass)$/,
          use: getCSSLoader(false)
        },
        {
          test: /\.module\.(s?css|sass)$/,
          use: getCSSLoader(true)
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.scss'],
      alias: {
        utils: `${ srcPath }/utils`,
        components: `${ srcPath }/components`,
        styles: `${ srcPath }/styles`
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(srcPath, 'index.html')
      }),
      new MiniCssExtractPlugin({
        filename: '[name]-[hash].css'
      }),
    ],
    devServer: {
      hot: true,
      contentBase: buildPath
    }
  }
};