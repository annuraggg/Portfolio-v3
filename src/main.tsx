import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ReactLenis } from "lenis/react";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactLenis root>
      <Toaster theme="dark" />
      <App />
    </ReactLenis>
  </React.StrictMode>
);
