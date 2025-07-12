import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/style.css";
import { BrowserRouter } from "react-router-dom";
import { Snackbar } from "@mui/material";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SnackbarProvider maxSnack={2}>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>
);
