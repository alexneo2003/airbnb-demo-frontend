import React from "react";
import styled from "styled-components";
import explore1 from "./explore1.png";
import explore2 from "./explore2.png";
import explore3 from "./explore3.png";
import "../App.css";
import { Row, Col } from "../styled";
import { Link } from "react-router-dom";

const LinkRoute = styled(Link)`
  text-decoration: none;
  &:visited {
    color: #383838;
  }
`;

const Card = styled.div`
  flex-direction: column;
  display: flex;
  cursor: pointer;
  overflow: hidden;
  background-color: transparent;
  width: 100%;
  margin: 4px 0 4px 0;
  padding: 0px;
  position: relative;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px 0px rgba(72, 72, 72, 0.08);
  text-align: left;
  border-radius: 4px;
  @media (min-width: 576px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const TitleText = styled.h2`
  margin-top: 50px;
  margin-bottom: 24px;
  font-size: 24px;
  font-family: CircularBold;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;
const Img = styled.img`
  background-image: url(${props => props.imgSrc});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  vertical-align: top;
  overflow: hidden;
  width: 100%;
  height: 72px;
  @media (min-width: 576px) {
    width: 96px;
    height: 72px;
  }
`;
const CardText = styled.span`
  vertical-align: middle;
  font-family: CircularBold;
  color: #383838;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  @media (min-width: 576px) {
    text-decoration: none;
    margin-left: 0px;
    font-size: 17px;
    padding-left: 24px;
  }
`;

export default function() {
  return (
    <div>
      <TitleText>Explore Airbnb</TitleText>
      <Row>
        <Col xs="6" md="5" lg="4">
          <LinkRoute to="/homes">
            <Card>
              <Img imgSrc={explore1} alt="" />
              <CardText>Homes</CardText>
            </Card>
          </LinkRoute>
        </Col>
        <Col xs="6" md="5" lg="4">
          <Card>
            <Img imgSrc={explore2} alt="" />
            <CardText>Experience</CardText>
          </Card>
        </Col>
        <Col xs="6" md="5" lg="4">
          <Card>
            <Img imgSrc={explore3} alt="" />
            <CardText>Restaurants</CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
