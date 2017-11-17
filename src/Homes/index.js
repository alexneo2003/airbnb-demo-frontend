import React from "react";
import styled from "styled-components";
import homes1 from "./homes1.png";
import homes2 from "./homes2.png";
import homes3 from "./homes3.png";
import Card from "./Card";
import { A, Row, Col, NextPage } from "../styled";

const HomesTitle = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`color: rgba(56, 56, 56, 1);`;

const HomesDiv = styled.div`position: relative;`;
export default function() {
  return (
    <HomesDiv>
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
    </HomesDiv>
  );
}
