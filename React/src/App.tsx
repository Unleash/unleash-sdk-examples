import { useFlag } from "@unleash/proxy-client-react";
import "./styles.css";

export default function App() {
  const isEnabled = useFlag("flag-react");

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>
        Flag is <strong>{isEnabled ? "enabled" : "disabled"}</strong>
      </p>
    </div>
  );
}
