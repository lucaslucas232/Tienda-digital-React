import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ProductoProvider } from "./contexts/ProductosContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductoProvider>
  </StrictMode>,
);
