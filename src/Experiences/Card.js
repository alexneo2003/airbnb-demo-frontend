import React from "react";
import styled from "styled-components";
import star from "./star.svg";

export const Card = styled.div`align-items: center;`;
const CardTitle = styled.div`
  display: flex;
  height: 30px;
`;
const Reviews = styled.div`display: flex;`;
const ReviewStar = styled.img`
  margin: 2px;
  align-items: center;
`;
const ReviewText = styled.div`
  display: flex;
  margin: 5px;
`;
export default function ExperiencesCard(props) {
  return (
    <Card>
      <img src={props.imgSrc} alt="" />
      <CardTitle>
        <strong>${props.price}</strong>
        {props.title}
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
