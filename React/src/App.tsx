import { useFlag, useVariant } from "@unleash/proxy-client-react";
import "./styles.css";

export default function App() {
  const isEnabled = useFlag("flag-react");

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>
        Here you can easily get started with{" "}
        <a href="https://github.com/Unleash/proxy-client-react">Unleash SDK</a>{" "}
        for <a href="https://react.dev/">React</a> and experiment.
      </p>
      <p>
        Flag is <strong>{isEnabled ? "enabled" : "disabled"}</strong>
      </p>
    </div>
  );
}
