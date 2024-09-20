import { UnleashClient } from "unleash-proxy-client";

const unleash = new UnleashClient({
    url: "https://app.unleash-hosted.com/demo/api/frontend",
    clientKey:
        "demo-app:dev.95ae66ab673bf467facb68b2487904f4891064d26b47e89ca498063d",
    appName: "javascript-codesandbox",
});

unleash.start();

setInterval(() => {
    document.getElementById("app").innerHTML = `Flag is ${
        unleash.isEnabled("example-flag") ? "enabled" : "disabled"
    }`;
}, 1000);
