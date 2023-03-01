import path from 'path';
import { fileURLToPath } from 'url';

import PugPlugin from 'pug-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {

	mode: 'development',

	entry: {
		index: './src/pug/index.pug',
	},

	output: {
		publicPath: './',
		path: path.join(__dirname, 'dist'),
	},

	plugins: [
		new PugPlugin({
			pretty: true,
			js: {
				filename: 'js/[name].js?v=[contenthash:8]',
			},
			css: {
				filename: 'css/[name].css?v[contenthash:8]',
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
				test: /\.(css|sass|scss)$/,
				use: ['css-loader', 'sass-loader'],
			},
		],
	},

	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		watchFiles: {
			paths: ['src/**/*.*'],
		},
	},

};

export default config;