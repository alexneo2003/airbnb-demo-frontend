import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header.js";
import Explore from "./Explore/Explore.js";
import Experiences from "./Experiences/Experiences";
import Homes from "./Homes/Homes.js";
import Popular from "./Popular/Popular.js";
import Featured from "./Featured/Featured.js";
import Footer from "./Footer/Footer.js";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 962px;
  margin-left: auto;
  margin-right: auto;
`;

class App extends Component {
  render() {
    return (
      <MainContainer className="App">
        <Header />
        <Explore />
        <Experiences />
        <Homes />
        <Popular />
        <Featured />
        <Footer />
      </MainContainer>
    );
  }
}

export default App;
