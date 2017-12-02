import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import fb from "./facebook.svg";
import instagram from "./instagram.svg";
import tw from "./twitter.svg";
import arrow from "./arrow-down.svg";
import { A, Row, Col } from "../styled";
import Media, { TabletFrom } from "../Media";

const Footer = styled.footer`
  margin-top: 32px;
  padding-top: 0px;
  width: 100%;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  @media (min-width: 576px) {
    margin-top: 48px;
    padding-top: 32px;
  }
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 976px;
  padding-left: 8px;
  padding-right: 8px;
  ${Media.lg`
    padding-left: 16px;
  `};
`;

const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  ${Media.sm`
    width: auto;
    display: inline;
  `};
`;

const Select = styled.select`
  white-space: nowrap;
  text-overflow: ellipsis;
  background-image: url(${arrow});
  background-size: 12px 7px;
  background-repeat: no-repeat;
  background-position: calc(100% - 8px) calc(1em),
    calc(100% - 8px) calc(1em + 2px), 100% 0;
  appearance: none;
  &::-ms-expand {
    display: none;
  }
  margin-top: 15px;
  padding: 8px 24px 8px 8px;
  width: 100%;
  border-radius: 4px;
  font-size: 12px;
  font-family: CircularLight;

  ${Media.mobile`
    &:first-child {
      margin-right: 8px;
    } 
    &:last-child {
      margin-left: 8px;
    }
  `};
  @media (min-width: 576px) {
    padding: 8px 32px 8px 8px;
  }
  @media (min-width: 768px) {
    background-size: 16px 7px;
    font-size: 15px;
  }
  @media (min-width: 992px) {
    padding: 12px;
    font-size: 18px;
    margin-left: -8px;
    margin-right: -8px;
  }
`;

const MenuTitle = styled.div`
  font-size: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  color: #383838;
  font-family: CircularBold;
  @media (min-width: 992px) {
    font-size: 15px;
  }
`;

const Menu = styled(A)`
  margin-bottom: 8px;
  font-size: 12px;
  color: #636363;
  font-family: Circular;
  @media (min-width: 992px) {
    font-size: 15px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (min-width: 992px) {
    margin-left: -8px;
  }
`;

const CopyrightMenuContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const CopyrightContainer = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  margin-top: 20px;
  display: block;
  padding-top: 16px;
  padding-bottom: 12px;
  @media (min-width: 576px) {
    margin-top: 60px;
    display: flex;
  }
`;

const Copyright = styled.p`
  font-size: 12px;
  margin-left: 12px;
  color: #383838;
  font-family: Circular;
  white-space: nowrap;
  @media (min-width: 992px) {
    font-size: 15px;
  }
`;

const CopyrightMenu = styled(A)`
  font-size: 12px;
  @media (min-width: 992px) {
    font-size: 15px;
  }
`;

const Img = styled.img`
  height: 16px;
  weight: 16px;
  @media (min-width: 576px) {
    height: 24px;
    weight: 24px;
  }
`;

export default function() {
  return (
    <Footer>
      <FooterContainer>
        <Row>
          <Col sm="3" lg="3">
            <SelectContainer>
              <Select>
                <option>English</option>
                <option>Russian</option>
              </Select>
              <Select>
                <option>United States Dollar</option>
                <option>Russian Ruble</option>
                <option>Ukrainian Hryvnia</option>
              </Select>
            </SelectContainer>
          </Col>
          <TabletFrom>
            <Col md="1" lg="1" />
            <Col md="3" lg="3">
              <MenuContainer>
                <MenuTitle>Airbnb</MenuTitle>
                <Menu href="#">About us</Menu>
                <Menu href="#">Careers</Menu>
                <Menu href="#">Press</Menu>
                <Menu href="#">Policies</Menu>
                <Menu href="#">Help</Menu>
                <Menu href="#">Diversity & Belonging</Menu>
              </MenuContainer>
            </Col>
            <Col md="3" lg="3">
              <MenuContainer>
                <MenuTitle>Discover</MenuTitle>
                <Menu href="#">Trust & Safety</Menu>
                <Menu href="#">Travel Credit</Menu>
                <Menu href="#">Gift Cards</Menu>
                <Menu href="#">Airbnb Citizen</Menu>
                <Menu href="#">Business Travel</Menu>
                <Menu href="#">Guidebooks</Menu>
                <Menu href="#">Airbnb Mag</Menu>
              </MenuContainer>
            </Col>
            <Col md="2" lg="2">
              <MenuContainer>
                <MenuTitle href="#">Hosting</MenuTitle>
                <Menu href="#">Why Host</Menu>
                <Menu href="#">Hospitality</Menu>
                <Menu href="#">Responsible Hosting</Menu>
                <Menu href="#">Community Center</Menu>
              </MenuContainer>
            </Col>
          </TabletFrom>
        </Row>
        <Row>
          <CopyrightContainer>
            <Col xs="5" md="2" lg="2">
              <LogoContainer>
                <img src={logo} alt="" />
                <Copyright> © Airbnb Inc. </Copyright>
              </LogoContainer>
            </Col>
            <Col md="5" lg="6" />
            <Col xs="9" md="5" lg="4">
              <CopyrightMenuContainer>
                <CopyrightMenu href="#"> Terms </CopyrightMenu>
                <CopyrightMenu href="#"> Privacy </CopyrightMenu>
                <CopyrightMenu href="#"> Site map</CopyrightMenu>
                <A href="#">
                  <Img src={fb} alt="" />
                </A>
                <A href="#">
                  <Img src={tw} alt="" />
                </A>
                <A href="#">
                  <Img src={instagram} alt="" />
                </A>
              </CopyrightMenuContainer>
            </Col>
          </CopyrightContainer>
        </Row>
      </FooterContainer>
    </Footer>
  );
}
