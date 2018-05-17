import React from "react";
import styled from "styled-components";
import star from "../img/star.svg";
import like from "./img/like.svg";
import { Reviews, ReviewStar, ReviewText } from "../styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  margin-bottom: 24px;
`;
export const Card = styled(Link)`
  text-decoration: none;
  align-items: center;
  cursor: pointer;
  width: 100%;
  &:visited {
    color: #383838;
  }
`;
const TitleText = styled.div`
  display: flex;
  font-family: CircularBold;
  margin-top: 6px;
  margin-bottom: 3px;
  color: #383838;
  font-size: 13px;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

const SubTitle = styled(TitleText)`
  text-transform: uppercase;
  margin-top: 12px;
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 10px;
  }
`;

const Price = styled.div`
  font-family: CircularLight;
  margin-top: 2px;
  margin-bottom: 6px;
  color: #383838;
  font-size: 13px;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Like = styled.div`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  background: url(${like}) no-repeat;
  width: 32px;
  height: 30px;
`;

const NewButton = styled.div`
  font-size: 12px;
  font-family: Circular;
  text-align: center;
  vertical-align: middle;
  line-height: 24px;
  color: #fff;
  width: 40px;
  height: 24px;
  background: #008489;
  border-radius: 2px;
`;

export default function HomesCard({ ...props }) {
  return (
    <Container>
      <Card to="/rooms">
        <Like />
        <Img src={props.imgSrc} alt="" />
        <SubTitle>
          {props.type} · {props.beds} beds
        </SubTitle>
        <TitleText>{props.title}</TitleText>
        <Price>${props.price} per night</Price>
        {props.reviewsCount === 0 ? (
          <NewButton>New</NewButton>
        ) : (
          <Reviews>
            <ReviewStar src={star} alt="star" />
            <ReviewStar src={star} alt="star" />
            <ReviewStar src={star} alt="star" />
            <ReviewStar src={star} alt="star" />
            <ReviewStar src={star} alt="star" />
            <ReviewText>{props.reviewsCount}</ReviewText>
          </Reviews>
        )}
      </Card>
    </Container>
  );
}
