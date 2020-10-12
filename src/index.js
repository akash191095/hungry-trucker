import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./components/App";
import AppProviders from "./components/AppProviders";
import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";

axios.defaults.baseURL = process.env.REACT_APP_API_LINK;
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
