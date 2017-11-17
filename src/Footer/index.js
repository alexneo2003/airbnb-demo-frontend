import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import fb from "./facebook.svg";
import instagram from "./instagram.svg";
import tw from "./twitter.svg";
import arrow from "./arrow-down.svg";
import { A, Row, Col } from "../styled";

const Footer = styled.div`margin-top: 25px;`;
const Select = styled.select`
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: calc(100% - 15px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), 100% 0;
  appearance: none;
  &::-ms-expand {
    display: none;
  }
  margin-top: 15px;
  padding: 15px;
  width: 100%;
  border-radius: 4px;
  font-size: 12px;
  color: #383838;
  @media (min-width: 576px) {
    font-size: 15px;
    width: 80%;
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
const Title = styled.p`
  font-size: 12px;
  color: #383838;
  font-family: CircularBold;
  @media (min-width: 992px) {
    font-size: 15px;
  }
`;
const TextMenuItems = styled.p`
  font-size: 12px;
  color: #383838;
  font-family: Circular;
  @media (min-width: 992px) {
    font-size: 15px;
  }
`;
const ColSelect = styled(Col)`
  width: 100%;
  display: flex;
  @media (min-width: 576px) {
    width: auto;
    display: inline;
  }
`;
const ColMobile = styled(Col)`
  display: none;
  @media (min-width: 576px) {
    display: block;
  }
`;

const Border = styled.footer`
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  margin-top: 50px;
`;

const FooterColLogo = styled(Col)`
  display: flex;
  justify-content: flex-start;
`;

const FooterColMenu = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const RowMobile = styled(Row)`
  display: block;
  @media (min-width: 576px) {
    display: flex;
  }
`;

const CopyrightMenu = styled.p`
  font-size: 12px;
  color: #383838;
  font-family: Circular;
  @media (min-width: 992px) {
    font-size: 15px;
  }
`;

const FooterAMenu = styled(A)`
  font-size: 12px;
  @media (min-width: 992px) {
    font-size: 15px;
  }
`;
export default function() {
  return (
    <Footer>
      <Row>
        <ColSelect xs="12" sm="4">
          <Select>
            <option>English</option>
            <option>Russian</option>
          </Select>
          <Select>
            <option>United States Dollar</option>
            <option>Russian Ruble</option>
            <option>Ukrainian Hryvna</option>
          </Select>
        </ColSelect>
        <ColMobile sm="3" md="3">
          <Title>Airbnb</Title>
          <TextMenuItems>About us</TextMenuItems>
          <TextMenuItems>Careers</TextMenuItems>
          <TextMenuItems>Press</TextMenuItems>
          <TextMenuItems>Policies</TextMenuItems>
          <TextMenuItems>Help</TextMenuItems>
          <TextMenuItems>Diversity & Belonging</TextMenuItems>
        </ColMobile>
        <ColMobile sm="3" md="3">
          <Title>Discover</Title>
          <TextMenuItems>Trust & Safety</TextMenuItems>
          <TextMenuItems>Travel Credit</TextMenuItems>
          <TextMenuItems>Gift Cards</TextMenuItems>
          <TextMenuItems>Airbnb Citizen</TextMenuItems>
          <TextMenuItems>Business Travel</TextMenuItems>
          <TextMenuItems>Guidebooks</TextMenuItems>
          <TextMenuItems>Airbnb Mag</TextMenuItems>
        </ColMobile>
        <ColMobile sm="2" md="2">
          <Title>Hosting</Title>
          <TextMenuItems>Why Host</TextMenuItems>
          <TextMenuItems>Hospitality</TextMenuItems>
          <TextMenuItems>Responsible Hosting</TextMenuItems>
          <TextMenuItems>Community Center</TextMenuItems>
        </ColMobile>
      </Row>
      <Border />

      <RowMobile>
        <FooterColLogo xs="5" sm="7" md="8">
          <img src={logo} alt="" />
          <CopyrightMenu> © Airbnb Inc. </CopyrightMenu>
        </FooterColLogo>
        <FooterColMenu xs="8" sm="5" md="4">
          <FooterAMenu href="#"> Terms </FooterAMenu>
          <FooterAMenu href="#"> Privacy </FooterAMenu>
          <FooterAMenu href="#"> Site map</FooterAMenu>
          <A href="#">
            <img src={fb} alt="" />
          </A>
          <A href="#">
            <img src={tw} alt="" />
          </A>
          <A href="#">
            <img src={instagram} alt="" />
          </A>
        </FooterColMenu>
      </RowMobile>
    </Footer>
  );
}
