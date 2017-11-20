import React from "react";
import styled from "styled-components";
import star from "../img/star.svg";

import { Price, Reviews, ReviewStar, ReviewText } from "../styled";

const Card = styled.div`cursor: pointer;`;
const TitleText = styled.div`
  display: block;
  white-space: pre-line;
  font-size: 13px;
  color: #383838;
  margin-top: 8px;
  margin-bottom: 3px;
  @media (min-width: 576px) {
    font-size: 15px;
  }
`;

const Img = styled.img`
  height: 216px;
  @media (min-width: 768px) {
    height: 346px;
  }
`;
export default function ExperiencesCard(props) {
  return (
    <Card>
      <Img src={props.imgSrc} alt="" />
      <TitleText>
        <Price>${props.price}</Price> {props.title}
      </TitleText>
      <Reviews>
        <ReviewStar src={star} alt="star" />
        <ReviewStar src={star} alt="star" />
        <ReviewStar src={star} alt="star" />
        <ReviewStar src={star} alt="star" />
        <ReviewStar src={star} alt="star" />
        <ReviewText>{props.reviewCount} reviews</ReviewText>
      </Reviews>
    </Card>
  );
}
