const path = require('path');
const PugPlugin = require('pug-plugin');

const config = {
	target: 'web',

	entry: {
		index: './src/pug/index.pug',
	},

	output: {
		publicPath: 'auto',
		path: path.join(__dirname, '../dist'),
		clean: true,
	},

	plugins: [
		new PugPlugin({
			pretty: true,
			js: {
				filename: 'js/[name].js?v=[contenthash:8]',
			},
			css: {
				filename: 'css/[name].css?v=[contenthash:8]',
			},
		}),
	],

	module: {
		rules: [

			{
				test: /\.pug$/,
				loader: PugPlugin.loader,
			},

			{
				test: /\.css$/,
				use: ['css-loader', 'postcss-loader'],
			},

			{
				test: /\.(png|jpe?g|webp|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name].[hash:8][ext]',
				},
			},

			{
				test: /\.svg$/i,
				type: 'asset/resource',
				generator: {
					filename: 'svg/[name].[hash:8][ext]',
				},
			}
		],

	},

};

module.exports = config;