import React from "react";
import styled from "styled-components";
import homes1 from "./homes1.png";
import homes2 from "./homes2.png";
import homes3 from "./homes3.png";
import Card from "./Card";
import { A, Row, Col, NextPage } from "../styled";

const HomesTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 24px;
  margin-top: 38px;
  font-family: CircularBold;
`;

const Homes = styled.div`position: relative;`;
export default function() {
  return (
    <Homes>
      <HomesTitle>
        <Title>Homes</Title>
        <A href="#">See all ></A>
      </HomesTitle>
      <Row>
        <Col xs="8" sm="5" md="4">
          <Card
            imgSrc={homes1}
            price={80}
            title={"La Salentina, see, nature & relax"}
            type={"Entire house"}
            beds={9}
            reviewsCount={99}
            reviewsStatus={"Superhost"}
          />
        </Col>
        <Col xs="8" sm="5" md="4">
          <Card
            imgSrc={homes2}
            price={80}
            title={"Your private 3 bedr. riad and exclusive"}
            type={"Entire house"}
            beds={5}
            reviewsCount={99}
            reviewsStatus={"Superhost"}
          />
        </Col>
        <Col xs="8" sm="5" md="4">
          <Card
            imgSrc={homes3}
            price={200}
            title={"Dreamy Tropical Tree House"}
            type={"Entire treehouse"}
            beds={1}
            reviewsCount={364}
            reviewsStatus={"Superhost"}
          />
        </Col>
      </Row>
      <NextPage />
    </Homes>
  );
}
