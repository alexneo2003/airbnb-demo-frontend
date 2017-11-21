import React from "react";
import logo from "./logo.svg";
import search from "./search.svg";
import dropdown from "./drop.svg";
import styled from "styled-components";
import { A, Row, Col } from "../styled";
import { Link } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background: #fff;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`;
const HeaderRow = styled(Row)`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 992px) {
    max-width: 992px;
  }
`;
const Input = styled.input`
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 16px;
  background-size: 16px 15px;
  padding-top: 14px;
  padding-right: 14px;
  padding-bottom: 14px;
  padding-left: 35px;
  margin-left: 8px;
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

const ImgLogo = styled.div`
  max-width: 32px;
  margin-top: 8px;
  position: relative;
  &:after {
    visibility: visible;
    position: absolute;
    content: "";
    background: url(${dropdown}) no-repeat 5px;
    width: 20px;
    height: 15px;
    bottom: 35%;
    left: 32px;
  }
  @media (min-width: 992px) {
    &:after {
      visibility: hidden;
    }
  }
`;

const MenuColumn = styled(Col)`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 16px;
  }
`;

export default function({ placeholder, ...props }) {
  return (
    <Header>
      <HeaderRow>
        <Col xs="2" md="1" lg="1">
          <Link to="/">
            <ImgLogo>
              <img src={logo} alt="logo" />
            </ImgLogo>
          </Link>
        </Col>
        <Col xs="10" md="7" lg="5">
          <Input placeholder={placeholder} />
        </Col>
        <Col xs="0" md="2" lg="2" />
        <MenuColumn md="4" lg="4">
          <A href="#">Become a host</A>
          <A href="#">Help</A>
          <A href="#">Sign Up</A>
          <A href="#">Log In</A>
        </MenuColumn>
      </HeaderRow>
    </Header>
  );
}
