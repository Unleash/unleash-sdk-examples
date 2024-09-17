import { UnleashClient } from "unleash-proxy-client";

const unleash = new UnleashClient({
    url: "https://app.unleash-hosted.com/demo/api/frontend",
    clientKey:
        "codesandbox:dev.b32907f5ced021c0443ad770b371c81191683c96e6ae8e003876d509",
    appName: "javascript-codesandbox",
});

unleash.start();

setInterval(() => {
    document.getElementById("app").innerHTML = `Flag is ${
        unleash.isEnabled("example-flag") ? "enabled" : "disabled"
    }`;
}, 1000);
