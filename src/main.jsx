import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { StoreProvider } from "easy-peasy";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </BrowserRouter>
);
