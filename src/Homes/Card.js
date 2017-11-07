import React from "react";
import styled from "styled-components";
import star from "./star.svg";

export const CardItem = styled.div`align-items: center;`;
const CardTitle = styled.div`
  display: flex;
  height: 30px;
  line-height: 0.8;
  margin: 0px;
  align-items: center;
`;
const HouseParams = styled.div`display: flex;`;
const StarReviews = styled.div`display: flex;`;
const StarRewievItem = styled.img`
  margin: 2px;
  align-items: center;
`;
const TextReviews = styled.div`
  display: flex;
  margin: 5px;
`;
export default function HomesCard(props) {
  return (
    <CardItem>
      <img src={props.imgSrc} alt="" />
      <CardTitle>
        <p>
          <strong>{props.price}</strong>
          {props.title}
        </p>
      </CardTitle>
      <CardTitle>
        <p>
          {props.type} · {props.beds} beds
        </p>
      </CardTitle>
      <HouseParams />
      <StarReviews>
        <StarRewievItem src={star} alt="star" />
        <StarRewievItem src={star} alt="star" />
        <StarRewievItem src={star} alt="star" />
        <StarRewievItem src={star} alt="star" />
        <StarRewievItem src={star} alt="star" />
        <TextReviews>
          {props.revCount} reviews · {props.revStatus}
        </TextReviews>
      </StarReviews>
    </CardItem>
  );
}
