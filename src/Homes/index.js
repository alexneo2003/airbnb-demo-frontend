import React from "react";
import styled from "styled-components";
import homes1 from "./homes1.png";
import homes2 from "./homes2.png";
import homes3 from "./homes3.png";
import Card from "./Card";
import { SeeAll, Row, Col, NextPage } from "../styled";

const TitleRow = styled.div`
  margin-top: 38px;
  margin-bottom: 24px;
  display: flex;
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

const Homes = styled.div`position: relative;`;
export default function() {
  return (
    <Homes>
      <TitleRow>
        <Title>Homes</Title>
        <SeeAll to="/homes">See all</SeeAll>
      </TitleRow>
      <Row>
        <Col xs="8" md="5" lg="4">
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
        <Col xs="8" md="5" lg="4">
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
        <Col xs="8" md="5" lg="4">
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
