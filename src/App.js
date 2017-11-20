import React from "react";
import "./App.css";
import Landing from "./Landing";
import Header from "./Header";
import Footer from "./Footer";
import Homes from "./Homes/Homes";
import { BrowserRouter, Route } from "react-router-dom";

export default () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Route path="/" exact component={Landing} />
      <Route path="/homes" component={Homes} />
      <Footer />
    </div>
  </BrowserRouter>
);
