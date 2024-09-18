const { initialize } = require('unleash-client');
require('dotenv').config();

const apiUrl = process.env.UNLEASH_API_URL;
const apiToken = process.env.UNLEASH_API_TOKEN;
const flag = 'example-flag';

// Initialize the Unleash client
const unleash = initialize({
  url: apiUrl,
  appName: 'codesandbox-node',
  metricsInterval: 1000,
  customHeaders: {
    Authorization: apiToken,
  },
});

unleash.on('ready', () => {
  if (unleash.isEnabled(flag)) {
    console.log(`Flag '${flag}' is enabled`);
  } else {
    console.log(`Flag '${flag}' is disabled`);
  }

  setTimeout(() => {
    console.log('Waited for metrics to be sent');
  }, 2000);
});

// Handle initialization errors
unleash.on('error', (error) => {
  console.error('Failed to initialize Unleash:', error);
});
