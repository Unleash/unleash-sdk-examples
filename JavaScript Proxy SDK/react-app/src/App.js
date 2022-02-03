import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App({unleash}) {

  const [toggles, setData] = useState({ demoToggle: unleash.isEnabled('proxy.demo') });
  useEffect(() => {
    unleash.on('update', () => {
      setData({ demoToggle: unleash.isEnabled('proxy.demo') });
    })
    unleash.on('initialized', () => { 
      setData({ demoToggle: unleash.isEnabled('proxy.demo') });
    })
    setData({ demoToggle: unleash.isEnabled('proxy.demo') });
  }, [unleash]);


  return (
    <div className="App">
      <header className="App-header">
        {toggles.demoToggle ? <img src={logo} className="App-logo" alt="logo" /> : null}
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
