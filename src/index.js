import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./css/vars.css";
import "./css/reset.css";
import "./css/fonts.css";
import "./css/index.css";
import store from "./stores";
import App from "./components/app";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
