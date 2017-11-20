import React from "react";
import "../App.css";
import Explore from "../Explore";
import Experiences from "../Experiences";
import Homes from "../Homes";
import Popular from "../Popular";
import Featured from "../Featured";
import { Main } from "../styled";

export default () => (
  <div className="App">
    <Main>
      <Explore />
      <Experiences />
      <Homes />
      <Popular />
      <Featured />
    </Main>
  </div>
);
