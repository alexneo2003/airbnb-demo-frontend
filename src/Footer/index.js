import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import fb from "./facebook.svg";
import instagram from "./instagram.svg";
import tw from "./twitter.svg";
import arrow from "./arrow-down.svg";
import { A, Row, Col } from "../styled";

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
const ColumnSelect = styled(Col)`
  width: 100%;
  display: flex;
  @media (min-width: 576px) {
    width: auto;
    display: inline;
  }
`;
const ColumnMenu = styled(Col)`
  display: none;
  @media (min-width: 576px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-left: 50px;
  }
  @media (min-width: 992px) {
    margin-left: 80px;
  }
`;

const LogoColumn = styled(Col)`
  display: flex;
  justify-content: flex-start;
`;

const Column = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const RowMobile = styled(Row)`
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  margin-top: 20px;
  padding-bottom: 24px;
  display: block;
  padding-bottom: 4px;
  @media (min-width: 576px) {
    margin-top: 36px;
    display: flex;
  }
`;

const Copyright = styled.p`
  font-size: 12px;
  margin-left: 12px;
  color: #383838;
  font-family: Circular;
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
          <ColumnSelect md="3" lg="3">
            <Col xs="6" sm="12">
              <Select>
                <option>English</option>
                <option>Russian</option>
              </Select>
            </Col>
            <Col xs="6" sm="12">
              <Select>
                <option>United States Dollar</option>
                <option>Russian Ruble</option>
                <option>Ukrainian Hryvnia</option>
              </Select>
            </Col>
          </ColumnSelect>
          <ColumnMenu md="2" lg="2">
            <MenuTitle>Airbnb</MenuTitle>
            <Menu href="#">About us</Menu>
            <Menu href="#">Careers</Menu>
            <Menu href="#">Press</Menu>
            <Menu href="#">Policies</Menu>
            <Menu href="#">Help</Menu>
            <Menu href="#">Diversity & Belonging</Menu>
          </ColumnMenu>
          <ColumnMenu md="2" lg="2">
            <MenuTitle>Discover</MenuTitle>
            <Menu href="#">Trust & Safety</Menu>
            <Menu href="#">Travel Credit</Menu>
            <Menu href="#">Gift Cards</Menu>
            <Menu href="#">Airbnb Citizen</Menu>
            <Menu href="#">Business Travel</Menu>
            <Menu href="#">Guidebooks</Menu>
            <Menu href="#">Airbnb Mag</Menu>
          </ColumnMenu>
          <ColumnMenu md="2" lg="2">
            <MenuTitle href="#">Hosting</MenuTitle>
            <Menu href="#">Why Host</Menu>
            <Menu href="#">Hospitality</Menu>
            <Menu href="#">Responsible Hosting</Menu>
            <Menu href="#">Community Center</Menu>
          </ColumnMenu>
        </Row>
        <RowMobile>
          <LogoColumn xs="5" md="7" lg="8">
            <img src={logo} alt="" />
            <Copyright> © Airbnb Inc. </Copyright>
          </LogoColumn>
          <Column xs="8" md="5" lg="4">
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
          </Column>
        </RowMobile>
      </FooterContainer>
    </Footer>
  );
}
