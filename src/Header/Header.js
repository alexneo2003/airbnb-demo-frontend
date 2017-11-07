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

const row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const col1 = styled.div`flex-basis: 10%;`;
const col5 = styled.div`flex-basis: 33%;`;
const col6 = styled.div`
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
          <row className="rowHeader">
            <col1 className="col-1">
              <img src={logo} className="App-logo" alt="logo" />
            </col1>
            <col5 className="col-5">
              <Input className="inputContainer" />
            </col5>
            <col6>
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
            </col6>
          </row>
        </header>
      </div>
    </div>
  );
}
