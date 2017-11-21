import React from "react";
import styled from "styled-components";
import star from "../img/star.svg";
import { Price, Reviews, ReviewStar, ReviewText } from "../styled";

export const Card = styled.div`
  align-items: center;
  cursor: pointer;
  width: 100%;
  margin-bottom: ${props => props.marginBottom};
`;
const TitleText = styled.div`
  display: flex;
  margin-top: 6px;
  margin-bottom: 3px;
  color: #383838;
  font-size: 13px;
`;

const Img = styled.img`
  width: 100%;
  /*height: 135px;
  @media (min-width: 768px) {
    height: 152px;
  }
  @media (min-width: 576px) {
    height: 204px;
  }*/
`;
export default function HomesCard(props) {
  return (
    <Card marginBottom={props.marginBottom}>
      <Img src={props.imgSrc} alt="" />
      <TitleText>
        <Price>
          ${props.price} {props.title}
        </Price>
      </TitleText>
      <TitleText>
        {props.type} · {props.beds} beds
      </TitleText>
      <Reviews>
        <ReviewStar src={star} alt="star" />
        <ReviewStar src={star} alt="star" />
        <ReviewStar src={star} alt="star" />
        <ReviewStar src={star} alt="star" />
        <ReviewStar src={star} alt="star" />
        <ReviewText>
          {props.reviewsCount} · {props.reviewsStatus}
        </ReviewText>
      </Reviews>
    </Card>
  );
}
