import React from "react";
import ReactDOM from "react-dom";
import "./style/global.css";
import FirebaseProvider from "utils/Firebase";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./style/Theme";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
