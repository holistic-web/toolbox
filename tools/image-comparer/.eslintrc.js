module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@holistic-web/toolbox'
	],
	parserOptions: {
		parser: 'babel-eslint'
	}
};
