import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import fb from "./facebook.svg";
import insta from "./instagram.svg";
import tw from "./twitter.svg";

const Row = styled.div`
  display: flex;
  margin-top: 50px;
`;
const Col1 = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  flex-basis: 25%;
  box-sizing: border-box;
`;
const Select = styled.select.attrs({})`width=229px;
height=48px;
`;
const Title = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #383838;
`;
const TextItems = styled.p`
  font-size: 15px;
  color: #383838;
  line-height: 0.8;
`;

const Border = styled.footer`
  border-bottom: 1px solid rgba(151, 151, 151, 1);
  margin-top: 50px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  aling-items: center;
`;
const DivLogo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
`;
const DivMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
`;

export default function() {
  return (
    <div className="footerContainer">
      <Row className="rowFooter">
        <Col1>
          <Select>
            <option>English</option>
            <option>Russian</option>
          </Select>
          <Select>
            <option>Unated States Dollar</option>
            <option>Russian Ruble</option>
            <option>Ukrainian Hrivna</option>
          </Select>
        </Col1>
        <Col1>
          <Title>Airbnb</Title>
          <TextItems>About us</TextItems>
          <TextItems>Careers</TextItems>
          <TextItems>Press</TextItems>
          <TextItems>Policies</TextItems>
          <TextItems>Help</TextItems>
          <TextItems>Diversity & Belonging</TextItems>
        </Col1>
        <Col1>
          <Title>Discover</Title>
          <TextItems>Trust & Safety</TextItems>
          <TextItems>Travel Credit</TextItems>
          <TextItems>Gift Cards</TextItems>
          <TextItems>Airbnb Citizen</TextItems>
          <TextItems>Business Travel</TextItems>
          <TextItems>Guidebooks</TextItems>
          <TextItems>Airbnbmag</TextItems>
        </Col1>
        <Col1>
          <Title>Hosting</Title>
          <TextItems>Why Host</TextItems>
          <TextItems>Hospitality</TextItems>
          <TextItems>Responsible Hosting</TextItems>
          <TextItems>Community Center</TextItems>
        </Col1>
      </Row>
      <Border />

      <Nav>
        <DivLogo>
          <img src={logo} alt="" />
          <p> © Airbnb Inc. </p>
        </DivLogo>
        <DivMenu>
          <p> Terms </p>
          <p> Privacy </p>
          <p> Site map</p>
          <a href="#">
            <img src={fb} alt="" />
          </a>
          <a href="#">
            <img src={tw} alt="" />
          </a>
          <a href="#">
            <img src={insta} alt="" />
          </a>
        </DivMenu>
      </Nav>
    </div>
  );
}
