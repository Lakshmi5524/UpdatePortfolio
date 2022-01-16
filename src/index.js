import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalStyle from './Styles/GlobalStyle'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    <App />
    </BrowserRouter>

  </React.StrictMode >,
  document.getElementById('root')
);
