import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Column from './charts/column';
import reportWebVitals from './reportWebVitals';
import Stacked from './charts/stacked';
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Column />
    <Stacked />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
