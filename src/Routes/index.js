import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import "./Components/assets/css/index.css";

import Home from "./Components/Home";
import TestPage from "./Components/TestPage";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/home" exact component={TestPage}/>
    </Switch>
  </BrowserRouter>
);
