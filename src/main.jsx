import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import HasRing from "./screens/HasRing";
import Home from "./screens/Home";
import Instructions from "./screens/Instructions";
import NoRingInstructions from "./screens/NoRingInstructions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/instrucoes",
    element: <Instructions />,
  },
  {
    path: "/instrucoes/semanel",
    element: <NoRingInstructions />,
  },
  {
    path: "/medicaoanel",
    element: <HasRing />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
