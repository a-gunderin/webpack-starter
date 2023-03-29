const commonConfig = require('./webpack.common.js');
const path = require('path');
const PugPlugin = require('pug-plugin');

const config = {
	...commonConfig,

	mode: 'development',

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

	devServer: {
		static: {
			directory: path.join(__dirname, '../dist'),
		},
		watchFiles: {
			paths: ['src/**/*.*'],
			options: {
				usePolling: true,
			},
		},
		open: true,
	},

};

module.exports = config;