import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'react-rater/lib/react-rater.css'
import './index.css';

import Router from './config/Router'

ReactDOM.render(
  // <React.StrictMode>
  //   <Router />
  // </React.StrictMode>,
    <Router />,
  document.getElementById('root')
);

