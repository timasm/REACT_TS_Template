// React Imports
import React from "react";
import ReactDOM from "react-dom/client";

// Routing
import { createHashRouter, RouterProvider, Link } from "react-router-dom";

// State Management
import { Provider } from "react-redux";
import { store } from "./state/store";

// SAP Webcomponents
import { ThemeProvider } from "@ui5/webcomponents-react";

// Components
import App from "./App.tsx";
import "./index.css";

const router = createHashRouter([
  {
    id: "root",
    path: "/",
    element: <App />,
  },
  {
    id: "test",
    path: "/test",
    element: <Link to="/">
      Navigate Back
    </Link>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
