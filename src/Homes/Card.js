import React from "react";
import styled from "styled-components";
import star from "../img/star.svg";
import { Price, Reviews, ReviewStar, ReviewText } from "../styled";

export const Card = styled.div`align-items: center;`;
const CardTitle = styled.div`
  display: flex;
  margin-top: 6px;
  margin-bottom: 3px;
  color: #383838;
  font-size: 13px;
`;

const Img = styled.img`width: auto;`;
export default function HomesCard(props) {
  return (
    <Card>
      <Img src={props.imgSrc} alt="" />
      <CardTitle>
        <Price>
          ${props.price} {props.title}
        </Price>
      </CardTitle>
      <CardTitle>
        {props.type} · {props.beds} beds
      </CardTitle>
      <Reviews>
        <ReviewStar src={star} alt="star" />
        <ReviewStar src={star} alt="star" />
        <ReviewStar src={star} alt="star" />
        <ReviewStar src={star} alt="star" />
        <ReviewStar src={star} alt="star" />
        <ReviewText>
          {props.reviewsCount} reviews · {props.reviewsStatus}
        </ReviewText>
      </Reviews>
    </Card>
  );
}
