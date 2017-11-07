import React from "react";
import styled from "styled-components";
import homes1 from "./homes1.png";
import homes2 from "./homes2.png";
import homes3 from "./homes3.png";
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
export default function() {
  return (
    <div className="homesContainer">
      <HomesTitle>
        <Title>Homes</Title>
        <SeeAll>See all ></SeeAll>
      </HomesTitle>
      <Row className="rowHomes">
        <Col1 className="card">
          <img src={homes1} />
          <p>$80 La Salentina, see, nature & relax</p>
        </Col1>
        <Col1 className="card">
          <img src={homes2} />
          <p>$82 Your private 3 bedr. riad and exclusive</p>
        </Col1>
        <Col1 className="card">
          <img src={homes3} />
          <p>$200 Dreamy Tropical Tree House</p>
        </Col1>
      </Row>
    </div>
  );
}
