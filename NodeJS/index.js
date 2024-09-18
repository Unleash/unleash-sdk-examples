const { initialize } = require('unleash-client');
require('dotenv').config();

const apiUrl = process.env.UNLEASH_API_URL;
const apiToken = process.env.UNLEASH_API_TOKEN;
const flag = 'example-flag';

const unleash = initialize({
  url: apiUrl,
  appName: 'codesandbox-node',
  metricsInterval: 1000,
  customHeaders: {
    Authorization: apiToken,
  },
});

setInterval(() => {
  console.log('Is enabled', unleash.isEnabled(flag));
}, 1000);
