import { useFlag } from "@unleash/proxy-client-react";
import "./styles.css";

export default function App() {
  const isEnabled = useFlag("example-flag");

  return (
    <div className="App">
      <h1>Unleash SDK in React</h1>
      {isEnabled ? (
        <p>Example flag is <strong>enabled</strong></p>
      ) : (
        <p>Example flag is <strong>disabled</strong></p>
      )}

      <footer>
        <p>
          Here you can easily get started with{" "}
          <a href="https://github.com/Unleash/proxy-client-react">Unleash SDK</a> for React and experiment.
        </p>
      </footer>
    </div>
  );
}
