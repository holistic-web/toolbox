module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@holistic-web/eslint-config-toolbox'
	],
	parserOptions: {
		parser: 'babel-eslint'
	}
};
