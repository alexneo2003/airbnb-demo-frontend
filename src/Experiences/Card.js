import React from "react";
import styled from "styled-components";
import star from "./star.svg";

export const CardItem = styled.div`align-items: center;`;
const CardTitle = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
`;
const StarReviews = styled.div`display: flex;`;
const StarRewievItem = styled.img`
  margin: 2px;
  align-items: center;
`;
const TextReviews = styled.div`
  display: flex;
  margin: 5px;
`;
export default function ExperiencesCard(props) {
  return (
    <CardItem>
      <img src={props.imgSrc} alt="" />
      <CardTitle>
        <p>
          <strong>{props.price}</strong>
          {props.title}
        </p>
      </CardTitle>
      <StarReviews>
        <StarRewievItem src={star} alt="star" />
        <StarRewievItem src={star} alt="star" />
        <StarRewievItem src={star} alt="star" />
        <StarRewievItem src={star} alt="star" />
        <StarRewievItem src={star} alt="star" />
        <TextReviews>{props.revCount} reviews</TextReviews>
      </StarReviews>
    </CardItem>
  );
}
