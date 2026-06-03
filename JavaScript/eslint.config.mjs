import js from '@eslint/js';
import globals from 'globals';

export default [
	js.configs.recommended,
	{
		languageOptions: {
			globals: { ...globals.browser }
		}
	},
	{
		files: ['playwright.config.js', 'tests/**'],
		languageOptions: { globals: { ...globals.node } }
	},
	{ ignores: ['dist/**', '.parcel-cache/**'] }
];
