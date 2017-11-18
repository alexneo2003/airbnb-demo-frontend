import React from "react";
import logo from "./logo.svg";
import search from "./search.svg";
import dropdown from "./drop.svg";
import styled from "styled-components";
import { A, Row, Col } from "../styled";

const Header = styled.header`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`;
const HeaderElements = styled.div`
  width: 100%;
  margin: 0 auto;
  align-items: center;
  @media (min-width: 992px) {
    max-width: 976px;
  }
`;
const Input = styled.input.attrs({
  placeholder: 'Try "Miami"',
  type: "text"
})`
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 16px;
  background-size: 16px 15px;
  padding-top: 14px;
  padding-right: 14px;
  padding-bottom: 14px;
  padding-left: 35px;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  color: #383838;
  @media (min-width: 576px) {
    background-size: 22px 22px;
    font-size: 16px;
    padding-left: 54px;
    padding-top: 16px;
    padding-right: 64px;
    padding-bottom: 14px;
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
    bottom: 70%;
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
    padding-right: 16px;
  }
`;

export default function() {
  return (
    <Header>
      <HeaderElements>
        <Row>
          <Col xs="2" sm="1" md="1">
            <CenterLogo>
              <ImgLogo>
                <img src={logo} alt="logo" />
              </ImgLogo>
            </CenterLogo>
          </Col>
          <Col xs="10" sm="7" md="5">
            <Input />
          </Col>
          <Col sm="2" md="2" />
          <HeaderCol4 sm="4" md="4">
            <A href="#">Become a host</A>
            <A href="#">Help</A>
            <A href="#">Sign Up</A>
            <A href="#">Log In</A>
          </HeaderCol4>
        </Row>
      </HeaderElements>
    </Header>
  );
}
