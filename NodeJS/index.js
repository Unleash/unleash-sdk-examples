const { initialize, isEnabled, getVariant } = require('unleash-client');
require('dotenv').config()

console.log(`Unleash API URL is ${process.env.UNLEASH_API_URL}`);
console.log(`Unleash API token is ${process.env.UNLEASH_API_TOKEN}`);

const apiUrl = process.env.UNLEASH_API_URL
const apiToken = process.env.UNLEASH_API_TOKEN
const flag = 'example-flag'


// Initialize the Unleash client
const instance = initialize({
  url: apiUrl,
  appName: 'codesandbox-node',
  metricsInterval: 1,
  customHeaders: {
    Authorization: apiToken,
  },
});

instance.on('ready', () => {
  const flags = ['child-1', 'child-2', 'child-3', 'child-4', 'child-variant-dependency', 'is-enabled-child', 'get-variant-child'];

  flags.forEach((flag) => {
    if (isEnabled(flag)) {
      console.log(`${flag} flag is enabled`);
    } else {
      console.log(`${flag} flag is disabled`);
    }
  });

  const variantChecks = ['child-variant-dependency', 'get-variant-child'];

  variantChecks.forEach((flag) => {
    const variant = getVariant(flag);
    console.log(`Got variant ${JSON.stringify(variant)} for flag ${flag}`);
  });

  // Sending metrics (imitating the Java sleep)
  setTimeout(() => {
    console.log('Metrics sent (simulated)');
  }, 5000);
});

// Handle the initialization error
instance.on('error', (error) => {
  console.error('Failed to initialize Unleash:', error);
});
