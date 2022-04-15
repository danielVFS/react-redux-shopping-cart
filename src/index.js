import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import store from "./store/store";
import HomeView from "./views/Home.view";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomeView />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
