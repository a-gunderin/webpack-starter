import path from 'path';
import { fileURLToPath } from 'url';

import PugPlugin from 'pug-plugin';

import atomizerConfig from './atomizer.config.js';

import { webpack as atomizerWebpack } from 'atomizer-plugins';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const atomizer = atomizerWebpack({
	config: atomizerConfig,
	outfile: path.join(__dirname, 'dist', 'css/atomizer.css'),
});

const config = {

	target: 'web',

	mode: 'development',

	entry: {
		index: './src/pug/index.pug',
	},

	output: {
		publicPath: 'auto',
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
		atomizer,
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
		open: true,
		hot: false,
		liveReload: true,
	},

};

export default config;