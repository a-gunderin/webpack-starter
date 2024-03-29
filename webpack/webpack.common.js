const path = require('path');
const PugPlugin = require('pug-plugin');

const config = {
	target: 'web',

	entry: {
		index: './src/pug/index.pug',
		'pages/home': './src/pug/pages/home.pug',
		'pages/about': './src/pug/pages/about.pug',
		'pages/contact': './src/pug/pages/contact.pug',
	},

	output: {
		publicPath: 'auto',
		path: path.join(__dirname, '../dist'),
		clean: true,
	},

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
				include: [path.resolve(__dirname, '../src/svg/images/')],
				type: 'asset/resource',
				generator: {
					filename: 'svg/images/[name].[hash:8][ext]',
				},
			},
		],

	},

};

module.exports = config;
