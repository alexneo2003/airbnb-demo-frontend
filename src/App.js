import React from "react";
import "./App.css";
import Landing from "./Landing";
import Homes from "./Homes/Homes";
import { BrowserRouter, Route } from "react-router-dom";

export default () => (
  <BrowserRouter>
    <div className="App">
      <Route path="/" exact component={Landing} />
      <Route path="/homes" component={Homes} />
    </div>
  </BrowserRouter>

);
