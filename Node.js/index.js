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

unleash.on('synchronized', () => {
    console.log('Unleash synchronized');
});
unleash.on('error', console.error);
unleash.on('warn', console.warn);

setInterval(() => {
    if (unleash.isEnabled(flag)) {
        console.log(`${flag} is enabled`);
    } else {
        console.log(`${flag} is disabled`);
    }
}, 1000);

