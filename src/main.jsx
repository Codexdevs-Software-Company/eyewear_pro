import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { GlassProvider } from "./context/GlassContext.jsx";
createRoot(document.getElementById("root")).render(
  <GlassProvider>
    <BrowserRouter basename="/eyewear_pro">
      <App />
    </BrowserRouter>
  </GlassProvider>
);
