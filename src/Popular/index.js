import React from "react";
import styled from "styled-components";
import popularReservations1 from "./popular-reservations1.png";
import popularReservations2 from "./popular-reservations2.png";
import popularReservations3 from "./popular-reservations3.png";
import popularReservations4 from "./popular-reservations4.png";
import PopularCard from "./Card";
import nextPage from ".././next.svg";

const Row = styled.div`display: flex;`;
const Col1 = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  flex-basis: 25%;
  box-sizing: border-box;
`;
const PopularTitle = styled.div`
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
    <div className="popularContainer">
      <PopularTitle>
        <Title>Popular reservations around the world</Title>
        <SeeAll>See all ></SeeAll>
      </PopularTitle>
      <Row>
        <Col1>
          <PopularCard
            imgSrc={popularReservations1}
            type={"SPEAKEASY"}
            title={"Chumley's"}
            price="$60"
          />
        </Col1>
        <Col1>
          <PopularCard
            imgSrc={popularReservations2}
            type={"KOREAN GASTROPUB"}
            title={"Hanjan"}
            price="$50"
          />
        </Col1>
        <Col1>
          <PopularCard
            imgSrc={popularReservations3}
            type={"GERMAN AMERICAN"}
            title={"Prime meats"}
            price="$55"
          />
        </Col1>
        <Col1>
          <PopularCard
            imgSrc={popularReservations4}
            type={"FINE SEAFOOD"}
            title={"Seaprice"}
            price="$70"
          />
        </Col1>
        <NextPage src={nextPage} alt="" />
      </Row>
    </div>
  );
}
