const PugPlugin = require('pug-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.common.js');

const config = {
	...commonConfig,

	mode: 'production',

	plugins: [
		new PugPlugin({
			pretty: false,
			js: {
				filename: 'js/[name].js?v=[contenthash:8]',
			},
			css: {
				filename: 'css/[name].css?v=[contenthash:8]',
			},
		}),
	],

	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin({
				minimizerOptions: {
					preset: [
						'default',
						{ discardComments: { removeAll: true } },
					],
				},
			}),
			new TerserPlugin(),
		],
	},

};

module.exports = config;
