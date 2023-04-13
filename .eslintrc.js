module.exports = {
	env: {
		node: true,
		es2021: true,
		browser: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	rules: {
		'no-tabs': 0,
		'linebreak-style': [
			'error',
			'windows',
		],
		indent: [
			'error',
			'tab',
		],
		'import/no-extraneous-dependencies': 0,
		'import/extensions': 'off',
	},
};
