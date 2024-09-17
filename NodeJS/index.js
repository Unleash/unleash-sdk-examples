const { initialize, isEnabled, getVariant } = require('unleash-client');

// Initialize the Unleash client
const instance = initialize({
  url: 'https://sandbox.getunleash.io/enterprise/api/',
  appName: 'unleash-sdk-example-node',
  instanceId: 'your-instance-1',
  refreshInterval: 1,
  metricsInterval: 1000,
  customHeaders: {
    Authorization: 'dependency-metrics-testing:development.b50d112c6e43f496c695fe8c9de2934d42ad5368faf574368adc4b18',
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
