const commonConfig = require('./webpack.common.js');
const path = require('path');

const config = {
	...commonConfig,

	mode: 'development',

	devServer: {
		static: {
			directory: path.resolve(__dirname, '../dist'),
		},
		open: true,
		hot: false,
		liveReload: true,
	},

};

module.exports = config;