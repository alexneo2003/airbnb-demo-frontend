import React from "react";
import styled from "styled-components";

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
          <h5>Airbnb</h5>
          <p>About us</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Policies</p>
          <p>Help</p>
          <p>Diversity & Belonging</p>
        </Col1>
        <Col1>
          <h5>Discover</h5>
          <p>Trust & Safety</p>
          <p>Travel Credit</p>
          <p>Gift Cards</p>
          <p>Airbnb Citizen</p>
          <p>Business Travel</p>
          <p>Guidebooks</p>
          <p>Airbnbmag</p>
        </Col1>
        <Col1>
          <h5>Hosting</h5>
          <p>Why Host</p>
          <p>Hospitality</p>
          <p>Responsible Hosting</p>
          <p>Community Center</p>
        </Col1>
      </Row>
    </div>
  );
}
