let config = {
  url: "https://app.unleash-hosted.com/demo/proxy",
  clientKey: "proxy-123",
  refreshInterval: 1, // 1 second
  appName: "my-webapp",
};

let client = new unleash.UnleashClient(config);
client.updateContext({ remoteAddress: "127.0.0.1" });
client.start();

client.on("update", () => {
  console.log(client.isEnabled("my-awesome-feature"));
  if (client.isEnabled("my-awesome-feature")) {
    // if the feature is on make bg color red
    document.body.style.backgroundColor = "red";
  } else {
    // if the feature is off make bg color green
    document.body.style.backgroundColor = "green";
  }
});
