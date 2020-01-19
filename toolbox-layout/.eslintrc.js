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
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 0,
		'indent': ['error', 'tab'],
		'comma-dangle': ['error', 'never'],
		'import/extensions': ['error', 'always', { vue: 'never', js: 'never'}]
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
};
