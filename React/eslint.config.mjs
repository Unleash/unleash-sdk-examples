import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		languageOptions: {
			globals: { ...globals.browser }
		}
	},
	{
		files: ['playwright.config.ts', 'tests/**'],
		languageOptions: { globals: { ...globals.node } }
	},
	{ ignores: ['dist/**'] }
);
