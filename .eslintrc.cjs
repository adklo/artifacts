// eslint.config.js
const eslint = require('@eslint/eslintrc');

module.exports = defineConfig([
	{
		rules: {
			semi: "error",
			"prefer-const": "error",
		},
	},
]);