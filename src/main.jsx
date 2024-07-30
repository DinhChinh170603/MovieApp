import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import AppProvider from "./contexts/AppProvider.jsx";
import Notfound from "./components/Notfound.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id", //:id
        element: <MovieDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
);
