import React from "react";
import "../App.css";
import Explore from "../Explore";
import Experiences from "../Experiences";
import Homes from "../Homes";
import Popular from "../Popular";
import Featured from "../Featured";
import Footer from "../Footer";
import Header from "../Header";
import { Main } from "../styled";

export default () => (
  <div className="App">
    <Header placeholder="Try Miami" />
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
