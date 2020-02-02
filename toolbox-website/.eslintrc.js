module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@holistic-web/stoolbox'
	],
	parserOptions: {
		parser: 'babel-eslint'
	}
};
