import React from "react";
import styled from "styled-components";
import experience1 from "./experience1.png";
import experience2 from "./experience2.png";
import experience3 from "./experience3.png";
import experience4 from "./experience4.png";
import Card from "./Card";
import { SeeAll, Row, Col, NextPage } from "../styled";

const TitleRow = styled.div`
  margin-top: 38px;
  margin-bottom: 24px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TitleText = styled.h2`
  font-size: 24px;
  margin: 0px;
  font-family: CircularBold;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const Experiences = styled.div`position: relative;`;
export default function() {
  return (
    <Experiences>
      <TitleRow>
        <TitleText>Experiences</TitleText>
        <SeeAll to="/">See all</SeeAll>
      </TitleRow>
      <Row>
        <Col xs="6" md="4" lg="3">
          <Card
            imgSrc={experience1}
            price={29}
            title="Forest therapy"
            reviewCount={44}
          />
        </Col>
        <Col xs="6" md="4" lg="3">
          <Card
            imgSrc={experience2}
            price={69}
            title="Whale watching"
            reviewCount={46}
          />
        </Col>
        <Col xs="6" md="4" lg="3">
          <Card
            imgSrc={experience3}
            price={69}
            title="Table Mountain Summit, Cable Car Down"
            reviewCount={44}
          />
        </Col>
        <Col xs="6" md="4" lg="3">
          <Card
            imgSrc={experience4}
            price={50}
            title="Salsa night"
            reviewCount={44}
          />
        </Col>
      </Row>
      <NextPage />
    </Experiences>
  );
}
