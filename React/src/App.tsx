import { useFlag, useFlagsStatus } from "@unleash/proxy-client-react";
import "./styles.css";

export default function App() {
  const isEnabled = useFlag("example-flag");
  const { flagsReady, flagsError } = useFlagsStatus(); // Optional, used for status output

  return (
    <div className="App">
      <p>
        Running in <strong>{process.env.NODE_ENV}</strong> mode.
      </p>
      <hr />
      <p>
        Flags: <strong>{flagsReady ? "loaded" : "Loading..."}</strong>
      </p>
      <p>
        Errors: <strong>{flagsError ? flagsError.message : "N/A"}</strong>
      </p>
      <hr />
      <p>
        Flag is <strong>{isEnabled ? "enabled! 😊" : "disabled 😞"}</strong>
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
