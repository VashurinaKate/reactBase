import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const myCount = 10;
ReactDOM.render(
  <React.StrictMode>
    <App count={myCount} name="Kate"  msg="This is message from props"/>
  </React.StrictMode>,
  document.getElementById('root')
);
