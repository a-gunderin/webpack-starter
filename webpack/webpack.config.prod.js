const commonConfig = require('./webpack.common.js');
const path = require('path');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const config = {
	...commonConfig,

	mode: 'production',

	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin({
				minimizerOptions: {
					preset: [
						"default",
						{ discardComments: { removeAll: true }, },
					],
				},
			}),
		]
	}

};

module.exports = config;