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

const popularItems = [
  {
    imgSrc: popularReservations1,
    type: "SPEAKEASY",
    price: 60,
    title: "Chumley's"
  },
  {
    imgSrc: popularReservations2,
    type: "KOREAN GASTROPUB",
    price: 50,
    title: "Hanjan"
  },
  {
    imgSrc: popularReservations3,
    type: "GERMAN AMERICAN",
    price: 55,
    title: "Prime meats"
  },
  {
    imgSrc: popularReservations4,
    type: "FINE SEAFOOD",
    price: 70,
    title: "Seaprice"
  }
];
const Popular = styled.div`
  position: relative;
`;
export default function() {
  return (
    <Popular>
      <TitleRow>
        <Title>Popular reservations around the world</Title>
        <SeeAll to="/">See all</SeeAll>
      </TitleRow>
      <Row>
        {popularItems.map((item, index) => (
          <Col key={index} xs="6" md="4" lg="3">
            <Card
              imgSrc={item.imgSrc}
              type={item.type}
              title={item.title}
              price={item.price}
            />
          </Col>
        ))}
      </Row>
      <NextPage />
    </Popular>
  );
}
