import React from "react";
import styled from "styled-components";
import experience1 from "./experience1.png";
import experience2 from "./experience2.png";
import experience3 from "./experience3.png";
import experience4 from "./experience4.png";
import Card from "./Card";
import { A, Row, Col, NextPage } from "../styled";

const Title = styled.h2`color: rgba(56, 56, 56, 1);`;
const ExpTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const ExperiencesDiv = styled.div`position: relative;`;
export default function() {
  return (
    <ExperiencesDiv>
      <ExpTitle>
        <Title>Experiences</Title>
        <A href="#">See all ></A>
      </ExpTitle>
      <Row>
        <Col xs="6" sm="4" md="3">
          <Card
            imgSrc={experience1}
            price={29}
            title="Forest therapy"
            reviewCount={44}
          />
        </Col>
        <Col xs="6" sm="4" md="3">
          <Card
            imgSrc={experience2}
            price={69}
            title="Whale watching"
            reviewCount={46}
          />
        </Col>
        <Col xs="6" sm="4" md="3">
          <Card
            imgSrc={experience3}
            price={69}
            title="Table Mountain Summit, Cable Car Down"
            reviewCount={44}
          />
        </Col>
        <Col xs="6" sm="4" md="3">
          <Card
            imgSrc={experience4}
            price={50}
            title="Salsa night"
            reviewCount={44}
          />
        </Col>
      </Row>
      <NextPage />
    </ExperiencesDiv>
  );
}
