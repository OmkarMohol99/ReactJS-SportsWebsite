import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppNavigator from "./App/AppNavigator";
// import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div>
      <BrowserRouter>
        <AppNavigator />
      </BrowserRouter>
    </div>
  </>
);
