import path from 'path';
import { fileURLToPath } from 'url';
import atomizerConfig from './atomizer.config.js';
import { webpack as atomizerWebpack } from 'atomizer-plugins';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const atomizer = atomizerWebpack({
	config: atomizerConfig,
	outfile: path.join(__dirname, 'dist', 'css/atomizer.css'),
});

const config = {
	mode: 'production',

	entry: {
		image: './src/image.js',
	},

	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		clean: true,
	},

	plugins: [
		atomizer,
	],

	module: {
		rules: [
			{
				test: /\.(png|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name].[hash:8][ext]',
				},
			},
		],

	},
};

export default config;