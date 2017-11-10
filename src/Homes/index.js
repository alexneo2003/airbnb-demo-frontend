import React from "react";
import styled from "styled-components";
import homes1 from "./homes1.png";
import homes2 from "./homes2.png";
import homes3 from "./homes3.png";
import Card from "./Card";
import nextPage from "./next.svg";

const Row = styled.div`display: flex;`;
const Col1 = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  flex-basis: 25%;
  box-sizing: border-box;
`;
const HomesTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  color: rgba(56, 56, 56, 1);
  margin-top: 50px;
`;
const SeeAll = styled.p`
  align: right;
  padding-top: 20px;
  font-size: 14px;
`;
const NextPage = styled.img`
  margin-left: -30px;
  margin-top: -70px;
`;
export default function() {
  return (
    <div>
      <HomesTitle>
        <Title>Homes</Title>
        <SeeAll>See all ></SeeAll>
      </HomesTitle>
      <Row>
        <Col1>
          <Card
            imgSrc={homes1}
            price={80}
            title={"La Salentina, see, nature & relax"}
            type={"Entire house"}
            beds={9}
            reviewsCount={99}
            reviewsStatus={"Superhost"}
          />
        </Col1>
        <Col1>
          <Card
            imgSrc={homes2}
            price={80}
            title={"Your private 3 bedr. riad and exclusive"}
            type={"Entire house"}
            beds={5}
            reviewsCount={99}
            reviewsStatus={"Superhost"}
          />
        </Col1>
        <Col1>
          <Card
            imgSrc={homes3}
            price={200}
            title={"Dreamy Tropical Tree House"}
            type={"Entire treehouse"}
            beds={1}
            reviewsCount={364}
            reviewsStatus={"Superhost"}
          />
        </Col1>
        <NextPage src={nextPage} alt="" />
      </Row>
    </div>
  );
}
