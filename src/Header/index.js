import React from "react";
import logo from "./logo.svg";
import search from "./search.svg";
import dropdown from "./drop.svg";
import styled from "styled-components";
import { A, Row, Col } from "../styled";

const Header = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`;
const Input = styled.input.attrs({
  placeholder: 'Try "Miami"',
  type: "text"
})`
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 10px;
  padding: 0.5em;
  margin-top: 8px;
  padding-left: 35px;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: auto;
  font-size: 14px;
  color: #383838;
  @media (min-width: 576px) {
    font-size: 16px;
    width: 350px;
  }
`;

const CenterLogo = styled.div`margin-top: 8px;`;

const ImgLogo = styled.a`
  position: relative;
  &:after {
    visibility: visible;
    position: absolute;
    content: "";
    background: url(${dropdown}) no-repeat 5px;
    width: 20px;
    height: 15px;
    bottom: 40%;
    right: -20px;
  }
  @media (min-width: 992px) {
    &:after {
      visibility: hidden;
    }
  }
`;

const HeaderCol4 = styled(Col)`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default function() {
  return (
    <Header>
      <Row>
        <Col xs="2" sm="1" md="1">
          <CenterLogo>
            <ImgLogo>
              <img src={logo} alt="logo" />
            </ImgLogo>
          </CenterLogo>
        </Col>
        <Col xs="10" sm="7" md="7">
          <Input />
        </Col>
        <HeaderCol4 xs="6" sm="4" md="4">
          <A href="#">Become a host</A>
          <A href="#">Help</A>
          <A href="#">Sign Up</A>
          <A href="#">Log In</A>
        </HeaderCol4>
      </Row>
    </Header>
  );
}
