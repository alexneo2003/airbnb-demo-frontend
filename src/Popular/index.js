import React from "react";
import styled from "styled-components";
import popularReservations1 from "./popular-reservations1.png";
import popularReservations2 from "./popular-reservations2.png";
import popularReservations3 from "./popular-reservations3.png";
import popularReservations4 from "./popular-reservations4.png";
import Card from "./Card";
import { SeeAll, Row, Col, NextPage } from "../styled";

const TitleRow = styled.div`
  margin-top: 38px;
  margin-bottom: 24px;
  display: flex;
  padding-right: 16px;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0px;
  font-family: CircularBold;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const Popular = styled.div`position: relative;`;
export default function() {
  return (
    <Popular>
      <TitleRow>
        <Title>Popular reservations around the world</Title>
        <SeeAll to="/">See all</SeeAll>
      </TitleRow>
      <Row>
        <Col xs="6" md="4" lg="3">
          <Card
            imgSrc={popularReservations1}
            type={"SPEAKEASY"}
            title={"Chumley's"}
            price={60}
          />
        </Col>
        <Col xs="6" md="4" lg="3">
          <Card
            imgSrc={popularReservations2}
            type={"KOREAN GASTROPUB"}
            title={"Hanjan"}
            price={50}
          />
        </Col>
        <Col xs="6" md="4" lg="3">
          <Card
            imgSrc={popularReservations3}
            type={"GERMAN AMERICAN"}
            title={"Prime meats"}
            price={55}
          />
        </Col>
        <Col xs="6" md="4" lg="3">
          <Card
            imgSrc={popularReservations4}
            type={"FINE SEAFOOD"}
            title={"Seaprice"}
            price={70}
          />
        </Col>
      </Row>
      <NextPage />
    </Popular>
  );
}
