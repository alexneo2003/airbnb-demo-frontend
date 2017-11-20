import React from "react";
import "./App.css";
import Landing from "./Landing";
import Header from "./Header";
import Homes from "./Homes/Homes";
import { BrowserRouter, Route } from "react-router-dom";
import { Main } from "./styled";

export default () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Main>
        <Route path="/" exact component={Landing} />
        <Route path="/homes" component={Homes} />
      </Main>
    </div>
  </BrowserRouter>
);
