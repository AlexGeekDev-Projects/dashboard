import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./sass/theme.scss";
import "./sass/main.scss";
import { UiProvider } from "./context/uiContext";
import { AdminProvider } from "./context/adminContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UiProvider>
    <AdminProvider>
      <App />
    </AdminProvider>
  </UiProvider>
);
