const { test } = require('node:test');
const assert = require('node:assert');
const { spawnSync } = require('node:child_process');
const { config } = require('dotenv');

test('outputs flag status', () => {
	const { parsed } = config({ path: '.env.example' });
	const env = { ...process.env, ...parsed };

	const result = spawnSync('node', ['index.js'], {
		env,
		timeout: 10000,
		encoding: 'utf8',
	});

	assert.match(result.stdout, /example-flag is (enabled|disabled)/);
});
