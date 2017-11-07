import React from "react";
import logo from "./logo.svg";
import search from "./search.svg";
import styled from "styled-components";

const Input = styled.input.attrs({
  placeholder: 'Try "Miami"',
  type: "text"
})`
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 15px;
  padding: 0.5em;
  margin: 0.5em;
  padding-left: 50px;
  border-width: 1px solid #000;
  border-radius: 4px;
  width: 392px;
  font-size: 24px;
`;

const ImgLogo = styled.img`align-items: center;`;

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  margit-bottom: 20px;
`;
const Col1 = styled.div`flex-basis: 8.3333%;`;
const Col5 = styled.div`flex-basis: 58.3333%;`;
const Col6 = styled.div`
  flex-basis: 33.3333%
  list-style: none;
  margin: 0;
`;
const Ul = styled.ul`
  text-align: center;
  list-style-type: none;
  margin: 0;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  padding: 15px;
`;
const Li = styled.li`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
`;
const A = styled.a`
  text-decoration: none;
  font-size: 14px;
`;
export default function() {
  return (
    <div className="main">
      <div className="headerContainer">
        <header className="App-header">
          <Row className="rowHeader">
            <Col1 className="col-1">
              <ImgLogo src={logo} alt="logo" />
            </Col1>
            <Col5 className="col-5">
              <Input className="inputContainer" />
            </Col5>
            <Col6>
              <Ul className="col-6">
                <Li>
                  <A href="#">Become a host</A>
                </Li>
                <Li>
                  <A href="#">Help</A>
                </Li>
                <Li>
                  <A href="#">Sign Up</A>
                </Li>
                <Li>
                  <A href="#">Log In</A>
                </Li>
              </Ul>
            </Col6>
          </Row>
        </header>
      </div>
    </div>
  );
}
