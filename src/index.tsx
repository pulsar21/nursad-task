import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "./assets/styles/index.scss";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";

render(
  <StrictMode>
      <Provider store={store}>
          <Router>
              <App />
          </Router>
      </Provider>
  </StrictMode>,
  document.getElementById("root")
);
