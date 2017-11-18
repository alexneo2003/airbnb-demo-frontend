import React from "react";
import styled from "styled-components";
import explore1 from "./explore1.png";
import explore2 from "./explore2.png";
import explore3 from "./explore3.png";
import "../App.css";
import { Row, Col } from "../styled";

const Card = styled.button`
  cursor: pointer;
  overflow: hidden;
  background-color: transparent;
  width: 100%;
  display: flex;
  padding: 0px;
  position: relative;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
  text-align: left;
  border-radius: 4px;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row;
    align-items: left;
  }
`;
const TitleText = styled.h2`
  margin-top: 50px;
  font-size: 32px;
  font-family: CircularBold;
`;
const Img = styled.div`
  background-image: url(${props => props.imgSrc});
  background-repeat: no-repeat;
  display: table-cell;
  vertical-align: top;
  width: 96px;
  height: 72px;
  horizontal-align: left;
`;
const CardText = styled.p`
  display: table-cell;
  vertical-align: middle;
  font-family: CircularBold;
  color: #383838;
  padding-top: 10px;
  padding-left: 10px;
  font-size: 12px;
  @media (min-width: 576px) {
    margin-left: 0px;
    font-size: 17px;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default function() {
  return (
    <div>
      <TitleText>Explore Airbnb</TitleText>
      <Row>
        <Col xs="6" sm="5" md="4">
          <Card>
            <Img imgSrc={explore1} alt="" />
            <CardText>Homes</CardText>
          </Card>
        </Col>
        <Col xs="6" sm="5" md="4">
          <Card>
            <Img imgSrc={explore2} alt="" />
            <CardText>Experience</CardText>
          </Card>
        </Col>
        <Col xs="6" sm="5" md="4">
          <Card>
            <Img imgSrc={explore3} alt="" />
            <CardText>Restaurants</CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
