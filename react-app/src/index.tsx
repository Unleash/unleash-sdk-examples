import ReactDOM from 'react-dom/client';
import { FlagProvider } from '@unleash/proxy-client-react';
import './index.css';
import App from './App';

const config = {
  url: 'http://localhost:4242/api/frontend',
  clientKey:
    '*:development.8ac4318bfcc6e8e841d28e9b973e2b6380e02f836c90b1adf9b3b0d5',
  appName: 'React app',
  refreshInterval: 2,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <FlagProvider config={config}>
      <App />
  </FlagProvider>
);

