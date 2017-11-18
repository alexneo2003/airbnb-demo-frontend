import React from "react";
import styled from "styled-components";
import popularReservations1 from "./popular-reservations1.png";
import popularReservations2 from "./popular-reservations2.png";
import popularReservations3 from "./popular-reservations3.png";
import popularReservations4 from "./popular-reservations4.png";
import Card from "./Card";
import { A, Row, Col, NextPage } from "../styled";

const PopularTitle = styled.div`
  display: flex;
  color: #383838;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 24px;
  margin-top: 38px;
  font-family: CircularBold;
`;

const Popular = styled.div`position: relative;`;
export default function() {
  return (
    <Popular>
      <PopularTitle>
        <Title>Popular reservations around the world</Title>
        <A href="#">See all ></A>
      </PopularTitle>
      <Row>
        <Col xs="6" sm="4" md="3">
          <Card
            imgSrc={popularReservations1}
            type={"SPEAKEASY"}
            title={"Chumley's"}
            price={60}
          />
        </Col>
        <Col xs="6" sm="4" md="3">
          <Card
            imgSrc={popularReservations2}
            type={"KOREAN GASTROPUB"}
            title={"Hanjan"}
            price={50}
          />
        </Col>
        <Col xs="6" sm="4" md="3">
          <Card
            imgSrc={popularReservations3}
            type={"GERMAN AMERICAN"}
            title={"Prime meats"}
            price={55}
          />
        </Col>
        <Col xs="6" sm="4" md="3">
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
