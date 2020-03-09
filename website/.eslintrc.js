module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@holistic-web/eslint-config'
	],
	parserOptions: {
		parser: 'babel-eslint'
	}
};
