import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
} from "react-router-dom";
import "./index.css";
import Home from "./screens/Home";
import Instructions from "./screens/Instructions";
import NoRingInstructions from "./screens/NoRingInstructions";
import HasRing from "./screens/HasRing";

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
    <BrowserRouter>
      <RouterProvider router={router} />
    </BrowserRouter>
  </React.StrictMode>
);
