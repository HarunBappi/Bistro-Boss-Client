import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./Providers/AuthProvider";
import Router from "./Routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={Router}></RouterProvider>
      </div>
    </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
