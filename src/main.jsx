import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import HasRing from "./screens/HasRing";
import Home from "./screens/Home";
import Instructions from "./screens/Instructions";
import NoRingInstructions from "./screens/NoRingInstructions";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/medicaoanel" component={HasRing} />
        <Route exact path="/instrucoes" component={Instructions} />
        <Route exact path="/semanel" component={NoRingInstructions} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
