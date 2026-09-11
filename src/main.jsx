import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,

          style: {
            background: "#12161D",
            color: "#E7EAF0",
            border: "1px solid rgba(79,157,255,.3)",
            backdropFilter: "blur(12px)",
          },

          success: {
            iconTheme: {
              primary: "#4F9DFF",
              secondary: "#12161D",
            },
          },

          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#111827",
            },
          },
        }}
      />

      <App />
    </ThemeProvider>
  </React.StrictMode>
);