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

const featuredItems = [
  { src: featured1, city: "Paris" },
  { src: featured2, city: "Miami" },
  { src: featured3, city: "Tokio" },
  { src: featured4, city: "Cape town" },
  { src: featured5, city: "Seoul" },
  { src: featured6, city: "Los Angeles" }
];

export default function() {
  return (
    <Featured>
      <Title>Featured destination</Title>
      <Row>
        {featuredItems.map((item, index) => (
          <Col key={index} xs="4" md="3" lg="2">
            <Img src={item.src} alt="" />
            <City>{item.city}</City>
          </Col>
        ))}
      </Row>
      <NextPage />
    </Featured>
  );
}
