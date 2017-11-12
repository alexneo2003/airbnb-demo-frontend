import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "./Footer";
import { Main } from "./styled";

class App extends Component {
  render() {
    return (
      <Main>
        <Header />
        <Explore />
        <Experiences />
        <Homes />
        <Popular />
        <Featured />
        <Footer />
      </Main>
    );
  }
}

export default App;
