import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./components/state-provider";
import reducer, { initialState } from "./components/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvider>
);
