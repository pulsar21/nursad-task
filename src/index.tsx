import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "./assets/styles/index.scss";
import {BrowserRouter as Router} from "react-router-dom";

render(
  <StrictMode>
      <Router>
          <App />
      </Router>
  </StrictMode>,
  document.getElementById("root")
);
