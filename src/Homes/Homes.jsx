import React from "react";
import Card from "./Card";
import styled from "styled-components";
import homes1 from "./homes1.png";
import homes2 from "./homes2.png";
import homes3 from "./homes3.png";
import homes4 from "./homes4.png";
import homes5 from "./homes5.png";
import homes6 from "./homes6.png";
import Filters from "./Filters";
import Pagination from "./Pagination";
import GoogleMapReact from "./GoogleMap";
import { Row, Col } from "../styled";

const HomesContainer = styled.div`
  height: auto;
  width: 100%;
  @media (min-width: 992px) {
    width: 66.6666%;
  }
`;

const HomesRow = styled(Row)`flex-wrap: wrap;`;

const GoogleMapContainer = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: block;
    position: fixed;
    width: 391px;
    height: calc(100%-140px);
    top: 140px;
    right: 0;
    bottom: 0;
  }
`;

export default function Homes() {
  return (
    <div>
      <Filters />
      <GoogleMapContainer>
        <GoogleMapReact />
      </GoogleMapContainer>
      <HomesContainer>
        <HomesRow>
          <Col xs="12" md="6" lg="6">
            <Card
              marginBottom={24}
              imgSrc={homes1}
              price={80}
              title={"La Salentina, see, nature & relax"}
              type={"Entire house"}
              beds={9}
              reviewsCount={99}
              reviewsStatus={"Superhost"}
            />
          </Col>
          <Col xs="12" md="6" lg="6">
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
          <Col xs="12" md="6" lg="6">
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
          <Col xs="12" md="6" lg="6">
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
          <Col xs="12" md="6" lg="6">
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
          <Col xs="12" md="6" lg="6">
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
        </HomesRow>
      </HomesContainer>
      <Pagination />
    </div>
  );
}
