import React from "react";
import "./index.css";
import "./assets/scss/infinite-wave.scss";
import "./assets/scss/infinite-button.scss";
import "./assets/css/infinite-submenu.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import ReactGA from 'react-ga';
ReactGA.initialize('G-X29KZ357LG');
ReactGA.pageview(window.location.pathname + window.location.search);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App/>
);
reportWebVitals();
