import logo from './logo.svg';
import { useFlag, useFlagsStatus } from '@unleash/proxy-client-react';
import './App.css';

function App() {
  const { flagsReady, flagsError } = useFlagsStatus();
  const enabled = useFlag('test-flag');

  return (
    <div className="App">
      <header className="App-header">
        {flagsReady && <p>Flags ready</p>}
        {flagsError && <p>Flags error</p>}
        {enabled &&  <img src={logo} className="App-logo" alt="logo" />}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
