var path = require('path')
var webpack = require('webpack')

var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
	pixi = path.join(phaserModule, 'build/custom/pixi.js'),
	p2 = path.join(phaserModule, 'build/custom/p2.js');

var gameModules = path.join(__dirname, '/src/game/');
var swipe = path.join(gameModules, 'Swipe.js'),
	marble = path.join(gameModules, 'Marble.js'),
	boot = path.join(gameModules, 'BootState.js'),
	preload = path.join(gameModules, 'PreloadState.js'),
	home = path.join(gameModules, 'HomeState.js'),
	game = path.join(gameModules, 'GameState.js');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    //publicPath: '/v2/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ],
	loaders: [
		{ test: /pixi.js/, loader: "script" },
  	  	{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
	]
  },
  resolve: {
    alias: {
		'vue$': 'vue/dist/vue.esm.js',
		'phaser': phaser,
		'pixi.js': pixi,
		'p2': p2,
		'swipe': swipe,
		'marble': marble,
		'boot': boot,
		'preload': preload,
		'home': home,
		'game': game
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
