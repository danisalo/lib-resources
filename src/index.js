import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactGA from 'react-ga4';


ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`)
ReactGA.pageview(window.location.pathname + window.location.search)
ReactGA.send({ hitType: "pageview", page: window.location.pathname })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)