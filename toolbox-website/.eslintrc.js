module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/airbnb'
	],
	rules: {
		'comma-dangle': ['error', 'never'],
		'linebreak-style': ['error', 'unix'],
		'global-require': 0,
		'import/extensions': ['error', 'always', { vue: 'never', js: 'never'}],
		'indent': ['error', 'tab'],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 0
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
};
