import { useFlag, useVariant } from "@unleash/proxy-client-react";
import "./styles.css";

export default function App() {
  const isEnabled = useFlag("example-flag");

  return (
    <div className="App">
      <p>
        Flag is <strong>{isEnabled ? "enabled" : "disabled"}</strong>
      </p>

      <footer>
        <p>
          Here you can easily get started with{" "}
          <a href="https://github.com/Unleash/proxy-client-react">Unleash SDK</a> for React and experiment.
        </p>
      </footer>
    </div>
  );
}
