import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./vars.css";
import "./reset.css";
import "./fonts.css";
import "./index.css";
import store from "./stores";
import App from "./components/app";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
