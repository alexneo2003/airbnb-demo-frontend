import React from "react";
import "./App.css";
import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "./Footer";
import { Main } from "./styled";

export default () => (
  <div className="App">
    <Header />
    <Main>
      <Explore />
      <Experiences />
      <Homes />
      <Popular />
      <Featured />
    </Main>
    <Footer />
  </div>
);
