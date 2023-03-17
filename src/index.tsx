import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import { ptBR } from "@mui/material/locale";
import { createTheme, ThemeProvider } from "@mui/material";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./core/contexts";

const theme = createTheme({}, ptBR);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      <ToastContainer />
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
