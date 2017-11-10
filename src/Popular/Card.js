import React from "react";
import styled from "styled-components";

export const Card = styled.div`line-height: 0.8;`;
const Type = styled.p`font-size: 10px;`;
const CardTitle = styled.div`font-size: 18px;`;

const Price = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;
export default function PopularCard(props) {
  return (
    <Card>
      <img src={props.imgSrc} alt="" />

      <Type>{props.type}</Type>

      <CardTitle>{props.title}</CardTitle>

      <Price>About ${props.price} per person</Price>
    </Card>
  );
}
