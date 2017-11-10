import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import fb from "./facebook.svg";
import instagram from "./instagram.svg";
import tw from "./twitter.svg";
import arrow from "./arrow-down.svg";

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
const Select = styled.select`
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: calc(100% - 15px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), 100% 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-top: 15px;
  padding: 15px;
  width: 80%;
  border-radius: 4px;
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
  align-items: center;
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
    <div>
      <Row>
        <Col1>
          <Select>
            <option>English</option>
            <option>Russian</option>
          </Select>
          <Select>
            <option>United States Dollar</option>
            <option>Russian Ruble</option>
            <option>Ukrainian Hryvna</option>
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
          <TextItems>Airbnb Mag</TextItems>
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
            <img src={instagram} alt="" />
          </a>
        </DivMenu>
      </Nav>
    </div>
  );
}
