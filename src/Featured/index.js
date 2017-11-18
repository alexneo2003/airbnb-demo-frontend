import React from "react";
import styled from "styled-components";
import featured1 from "./featured1.png";
import featured2 from "./featured2.png";
import featured3 from "./featured3.png";
import featured4 from "./featured4.png";
import featured5 from "./featured5.png";
import featured6 from "./featured6.png";
import { Row, Col, NextPage } from "../styled";

const Title = styled.h2`
  font-size: 24px;
  margin-top: 38px;
  margin-bottom: 24px;
  font-family: CircularBold;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;
const Featured = styled.div`
  position: relative;
  cursor: pointer;
`;
const Img = styled.img`
  height: 138px;
  @media (min-width: 768px) {
    height: 264px;
  }
  @media (min-width: 992px) {
    height: 220px;
  }
`;
const City = styled.p`
  font-size: 12px;
  margin-top: 8px;
  font-family: CircularBold;
  @media (min-width: 576px) {
    font-size: 15px;
  }
`;
export default function() {
  return (
    <Featured>
      <Title>Featured destination</Title>
      <Row>
        <Col xs="4" md="3" lg="2">
          <Img src={featured1} alt="" />
          <City>Paris</City>
        </Col>
        <Col xs="4" md="3" lg="2">
          <Img src={featured2} alt="" />
          <City>Miami</City>
        </Col>
        <Col xs="4" md="3" lg="2">
          <Img src={featured3} alt="" />
          <City>Tokio</City>
        </Col>
        <Col xs="4" md="3" lg="2">
          <Img src={featured4} alt="" />
          <City>Cape town</City>
        </Col>
        <Col xs="4" md="3" lg="2">
          <Img src={featured5} alt="" />
          <City>Seoul</City>
        </Col>
        <Col xs="4" md="3" lg="2">
          <Img src={featured6} alt="" />
          <City>Los Angeles</City>
        </Col>
      </Row>
      <NextPage />
    </Featured>
  );
}
