import React from "react";
import ReactDOM from "react-dom/client";
import { FlagProvider } from "@unleash/proxy-client-react";
import App from "./App";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <FlagProvider
      config={{
        url: "https://app.unleash-hosted.com/demo/api/frontend", // Your front-end API URL or the Unleash proxy's URL (https://<proxy-url>/proxy)
        clientKey:
          "demo-app:dev.95ae66ab673bf467facb68b2487904f4891064d26b47e89ca498063d", // A client-side API token OR one of your proxy's designated client keys
        refreshInterval: 15, // How often (in seconds) the client should poll the proxy for updates
        appName: "codesandbox-react", // The name of your application. It's only used for identifying your application
      }}
    >
      <App />
    </FlagProvider>
  </React.StrictMode>
);
