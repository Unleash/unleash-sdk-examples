const express = require("express");
const { initialize, isEnabled } = require("unleash-client");
const app = express();
const port = 3030;

const unleash = initialize({
  url: "http://localhost:4242/api/",
  appName: "my-node-name",
  instanceId: "my-unique-instance-id",
  refreshInterval: 1000,
  customHeaders: {
    Authorization: "YOUR-API-TOKEN",
  },
});

app.get("/", (req, res) => {
  if (unleash.isEnabled("dark-mode")) {
    res.status(200).json({
      feature: "dark-mode",
      enabled: unleash.isEnabled("dark-mode"),
    });
  } else {
    res.status(200).json({
      feature: "dark-mode",
      enabled: unleash.isEnabled("dark-mode"),
    });
  }
});
// The code we used to test the SDK connection with our app.
/* setInterval(() => {
  if (unleash.isEnabled("DemoToggle")) {
    console.log("Toggle enabled");
  } else {
    console.log("Toggle disabled");
  }
}, 1000); 
*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
