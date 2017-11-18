import React from "react";
import styled from "styled-components";

export const Card = styled.div`line-height: 0.8;`;
const Type = styled.p`
  font-size: 8px;
  margin-top: 12px;
  font-family: CircularBold;
  @media (min-width: 576px) {
    font-size: 10px;
  }
`;
const CardTitle = styled.div`
  font-size: 14px;
  font-family: CircularBold;
  @media (min-width: 576px) {
    font-size: 18px;
  }
`;

const Price = styled.p`
  margin-top: 10px;
  font-size: 12px;
  font-family: CircularLight;
  @media (min-width: 576px) {
    font-size: 18px;
  }
`;
const Img = styled.img`width: auto;`;
export default function PopularCard(props) {
  return (
    <Card>
      <Img src={props.imgSrc} alt="" />

      <Type>{props.type}</Type>

      <CardTitle>{props.title}</CardTitle>

      <Price>About ${props.price} per person</Price>
    </Card>
  );
}
