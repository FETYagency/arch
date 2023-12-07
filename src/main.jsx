import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";
import HomePage from "./routes/pages/homePage";
import Portfolio from "./routes/pages/portfolio";
import AboutUs from "./routes/pages/aboutUs";
import Contact from "./routes/pages/contact";
const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/about us",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={ROUTES} />,
);
