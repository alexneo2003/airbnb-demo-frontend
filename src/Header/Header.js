import React from "react";
import logo from "./logo.svg";
import search from "./search.svg";
import styled from "styled-components";

const Input = styled.input.attrs({
  placeholder: 'Try "Miami"',
  type: "text"
})`
  pading: 0.5em;
  marging: 0.5em;
  border-width: 1px solid #000;
  border-radius: 4px;
  width: 392px;
  height: 48px;
  font-size: 24px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Col1 = styled.div`flex-basis: 10%;`;
const Col5 = styled.div`flex-basis: 33%;`;
const Col6 = styled.div`
  justify-content: flex-end;
  display: flex;
  list-style: none;
  margin: 0;
`;

export default function() {
  return (
    <div className="main">
      <div className="headerContainer">
        <header className="App-header">
          <Row className="rowHeader">
            <Col1 className="col-1">
              <img src={logo} className="App-logo" alt="logo" />
            </Col1>
            <Col5 className="col-5">
              <Input className="inputContainer" />
            </Col5>
            <Col6>
              <ul className="col-6">
                <li>
                  <a href="#">Become a host</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
                <li>
                  <a href="#">Log In</a>
                </li>
              </ul>
            </Col6>
          </Row>
        </header>
      </div>
    </div>
  );
}
