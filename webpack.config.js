const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const paths = {
  src: 'src',
  dist: 'dist',
  assets: 'assets',
};

const webpackConfig = {
  entry: {
    pre: path.join(__dirname, paths.src, 'scripts/pre.js'),
    post: path.join(__dirname, paths.src, 'scripts/post.js'),
    app: path.join(__dirname, paths.src, 'app.js'),
  },
  output: {
    filename: `${paths.assets}/[name].js`,
    path: path.resolve(paths.dist),
    publicPath: '/',
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['stage-0']
        }
      }
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        // resolve-url-loader may be chained before sass-loader if necessary
        use: ['css-loader', 'sass-loader']
      })
    },
    ],
  },
};

function getChunk(name) {
  return webpackConfig.output.publicPath + name;
}
const getChunkJs = name => getChunk(webpackConfig.output.filename.replace(/\[(.+?)\]/g, name));
const getChunkCss = () => getChunk(`${paths.assets}/style.css`);

webpackConfig.plugins = [
  new ExtractTextPlugin({
    filename: `${paths.assets}/style.css`,
  }),
  new HtmlWebpackPlugin({
    template: `${paths.src}/index.html`,
    excludeChunks: ['pre', 'post'],
    styles: getChunkCss(),
    headChunk: getChunkJs('pre'),
    bodyChunk: getChunkJs('post'),
  }),
];

module.exports = webpackConfig;
