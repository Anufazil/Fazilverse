import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,

          style: {
            background: "#111827",
            color: "#fff",
            border: "1px solid rgba(34,211,238,.3)",
            backdropFilter: "blur(12px)",
          },

          success: {
            iconTheme: {
              primary: "#22d3ee",
              secondary: "#111827",
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
    </>
  </React.StrictMode>
);