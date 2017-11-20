import React from "react";
import Card from "./Card";
import styled from "styled-components";
import homes1 from "./homes1.png";
import homes2 from "./homes2.png";
import homes3 from "./homes3.png";
import homes4 from "./homes4.png";
import homes5 from "./homes5.png";
import homes6 from "./homes6.png";
import Header from "../Header";
import { Row, Col } from "../styled";

export default function Homes() {
  return (
    <div>
      <Header />
      <Row>
        <Col xs="12" md="6" lg="4">
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
        <Col xs="12" md="6" lg="4">
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
        <Col xs="12" md="6" lg="4">
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
        <Col xs="12" md="6" lg="4">
          <Card
            imgSrc={homes4}
            price={200}
            title={"Best location old to"}
            type={"Entire apartment"}
            beds={1}
            reviewsCount={369}
            reviewsStatus={"Superhost"}
          />
        </Col>
        <Col xs="12" md="6" lg="4">
          <Card
            imgSrc={homes5}
            price={83}
            title={"Lussuoso. Vista inca"}
            type={"Entire apartment"}
            beds={6}
            reviewsCount={105}
            reviewsStatus={"Superhost"}
          />
        </Col>
        <Col xs="12" md="6" lg="4">
          <Card
            imgSrc={homes6}
            price={72}
            title={"In the historical ce"}
            type={"Entire house"}
            beds={3}
            reviewsCount={221}
            reviewsStatus={"Superhost"}
          />
        </Col>
      </Row>
    </div>
  );
}
