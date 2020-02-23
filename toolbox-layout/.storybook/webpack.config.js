const path = require('path');

module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.scss$/,
		use: [
			'vue-style-loader',
			'css-loader',
			'sass-loader'
		],
	});
	config.module.rules.push({
		test: /\.vue$/,
		loader: 'vue-docgen-loader',
		enforce: 'post'
	});
	return config;
};
