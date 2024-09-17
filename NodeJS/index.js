const { initialize } = require('unleash-client');
require('dotenv').config()

const apiUrl = process.env.UNLEASH_API_URL
const apiToken = process.env.UNLEASH_API_TOKEN
const flag = 'example-flag'

// Initialize the Unleash client
const instance = initialize({
  url: apiUrl,
  appName: 'codesandbox-node',
  metricsInterval: 1000,
  customHeaders: {
    Authorization: apiToken,
  },
});

instance.on('ready', () => {
  if (unleash.isEnabled(flag)) {
    console.log(`Flag '${flag}' is enabled`);
  } else {
    console.log(`Flag '${flag}' is disabled`);
  }

  // Sending metrics (imitating the Java sleep)
  setTimeout(() => {
    console.log('Metrics sent (simulated)');
  }, 5000);
});

// Handle the initialization error
instance.on('error', (error) => {
  console.error('Failed to initialize Unleash:', error);
});
