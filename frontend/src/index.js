import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
