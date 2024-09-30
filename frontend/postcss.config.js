const config = {
	plugins: [
		require("postcss-preset-env"),
		require("postcss-nested"),
		require("cssnano")({
			preset: "default", // Использование стандартного предустановленного набора настроек
		}),
		require("postcss-lighten-darken"),
		require("postcss-simple-vars"),
	],
	parser: require("postcss-comment"),
};

module.exports = config;
