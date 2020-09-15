import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App.js'
import CharPage from './CharPage.js'

ReactDOM.render(
  <Router>
    <App />
    {/* <CharPage /> */}
  </Router>,
  document.getElementById('root')
);
