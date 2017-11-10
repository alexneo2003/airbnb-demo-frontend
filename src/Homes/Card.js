import React from "react";
import styled from "styled-components";
import star from "./star.svg";

export const Card = styled.div`align-items: center;`;
const CardTitle = styled.div`
  display: flex;
  height: 30px;
  line-height: 0.8;
  margin: 0px;
  align-items: center;
`;
const HouseParams = styled.div`display: flex;`;
const Reviews = styled.div`display: flex;`;
const ReviewStar = styled.img`
  margin: 2px;
  align-items: center;
`;
const TextReviews = styled.div`
  display: flex;
  margin: 5px;
`;
export default function HomesCard(props) {
  return (
    <Card>
      <img src={props.imgSrc} alt="" />
      <CardTitle>
        <strong>${props.price}</strong>
        {props.title}
      </CardTitle>
      <CardTitle>
        <p>
          {props.type} · {props.beds} beds
        </p>
      </CardTitle>
      <HouseParams />
      <Reviews>
        <ReviewStar src={star} alt="star" />
        <ReviewStar src={star} alt="star" />
        <ReviewStar src={star} alt="star" />
        <ReviewStar src={star} alt="star" />
        <ReviewStar src={star} alt="star" />
        <TextReviews>
          {props.reviewsCount} reviews · {props.reviewsStatus}
        </TextReviews>
      </Reviews>
    </Card>
  );
}
