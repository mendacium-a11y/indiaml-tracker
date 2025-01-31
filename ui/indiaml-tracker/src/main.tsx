import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "@/router/router";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <React.StrictMode>
      <div className="w-full h-[100dvh] touch-manipulation select-none">
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  </ThemeProvider>
);
