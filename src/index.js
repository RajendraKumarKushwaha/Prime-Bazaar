import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { PrimeIndex } from './components/prime-index/prime-index';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import Store from './components/stores/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={Store}>
        <PrimeIndex />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
