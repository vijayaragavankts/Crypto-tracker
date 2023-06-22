import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CryptoContext from './CryptoContext';
import 'react-alice-carousel/lib/alice-carousel.css';

ReactDOM.render( <
    CryptoContext >
  <
    React.StrictMode >

    <
      App />

    <
    /React.StrictMode> <
    /CryptoContext>,
    document.getElementById('root')
    );