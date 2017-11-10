import React from "react";
import styled from "styled-components";
import experience1 from "./experience1.png";
import experience2 from "./experience2.png";
import experience3 from "./experience3.png";
import experience4 from "./experience4.png";
import Card from "./Card";
import nextPage from "./next.svg";

const Row = styled.div`display: flex;`;
const Col1 = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  flex-basis: 25%;
  box-sizing: border-box;
`;

const Title = styled.h2`
  color: rgba(56, 56, 56, 1);
  margin-top: 50px;
`;
const ExpTitle = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
`;

const SeeAll = styled.p`
  align: right;
  padding-top: 20px;
  font-size: 14px;
`;

const NextPage = styled.img`
  margin-left: -30px;
  margin-top: -60px;
`;
export default function() {
  return (
    <div>
      <ExpTitle>
        <Title>Experiences</Title>
        <SeeAll>See all ></SeeAll>
      </ExpTitle>
      <Row>
        <Col1>
          <Card
            imgSrc={experience1}
            price={29}
            title="Forest therapy"
            reviewCount={44}
          />
        </Col1>
        <Col1>
          <Card
            imgSrc={experience2}
            price={69}
            title="Whale watching"
            reviewCount={46}
          />
        </Col1>
        <Col1>
          <Card
            imgSrc={experience3}
            price={69}
            title="Table Mountain Summit, Cable Car Down"
            reviewCount={44}
          />
        </Col1>
        <Col1>
          <Card
            imgSrc={experience4}
            price={50}
            title="Salsa night"
            reviewCount={44}
          />
        </Col1>
        <NextPage src={nextPage} alt="" />
      </Row>
    </div>
  );
}
