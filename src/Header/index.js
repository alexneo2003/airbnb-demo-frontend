import React from "react";
import logo from "./logo.svg";
import search from "./search.svg";
import styled from "styled-components";

const HeaderFlex = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`;
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
  display: flex;
  flex-basis: 33.3333%;
  justify-content: space-between;
`;

const A = styled.a`
  color: #383838;
  text-decoration: none;
  font-size: 14px;
`;
export default function() {
  return (
    <HeaderFlex>
      <Row>
        <Col1>
          <ImgLogo src={logo} alt="logo" />
        </Col1>
        <Col5>
          <Input />
        </Col5>
        <Col6>
          <A href="#">Become a host</A>
          <A href="#">Help</A>
          <A href="#">Sign Up</A>
          <A href="#">Log In</A>
        </Col6>
      </Row>
    </HeaderFlex>
  );
}
