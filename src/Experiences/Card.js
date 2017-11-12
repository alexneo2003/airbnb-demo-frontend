import React from "react";
import styled from "styled-components";
import star from "../img/star.svg";

import { Price, Reviews, ReviewStar, ReviewText } from "../styled";

const Card = styled.div``;
const CardTitle = styled.div`
  display: block;
  white-space: pre-line;
  font-size: 13px;
  color: #383838;
  @media (min-width: 576px) {
    font-size: 15px;
  }
`;

const Img = styled.img`width: auto;`;
export default function ExperiencesCard(props) {
  return (
    <Card>
      <Img src={props.imgSrc} alt="" />
      <CardTitle>
        <Price>${props.price}</Price> {props.title}
      </CardTitle>
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
