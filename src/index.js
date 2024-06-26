import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import store from './component/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
