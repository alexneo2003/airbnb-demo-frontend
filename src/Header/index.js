import React from "react";
import logo from "./logo.svg";
import search from "./search.svg";
import dropdown from "./drop.svg";
import styled from "styled-components";
import { A, Row, Col } from "../styled";
import { Link } from "react-router-dom";
import { DesktopOnly } from "../Media";

const Header = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 10;
  background: #fff;
  width: 100%;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;
  @media (min-width: 992px) {
    max-width: 976px;
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
  margin-top: 8px;
  margin-bottom: 8px;
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

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const Logo = styled.div`
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

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
`;

const MenuLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export default function({ placeholder, ...props }) {
  return (
    <Header>
      <HeaderContainer>
        <Row>
          <Col xs="2" md="1" lg="1">
            <LogoContainer>
              <Logo>
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </Logo>
            </LogoContainer>
          </Col>
          <Col xs="10" md="7" lg="5">
            <Input placeholder={placeholder} />
          </Col>
          <Col xs="0" md="2" lg="2" />
          <DesktopOnly>
            <Col md="4" lg="4">
              <MenuContainer>
                <MenuLink>
                  <A href="#">Become a host</A>
                  <A href="#">Help</A>
                  <A href="#">Sign Up</A>
                  <A href="#">Log In</A>
                </MenuLink>
              </MenuContainer>
            </Col>
          </DesktopOnly>
        </Row>
      </HeaderContainer>
    </Header>
  );
}
