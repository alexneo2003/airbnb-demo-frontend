import React from "react";
import styled from "styled-components";
import experience1 from "./experience1.png";
import experience2 from "./experience2.png";
import experience3 from "./experience3.png";
import experience4 from "./experience4.png";

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
`;

const SeeAll = styled.p`
  align: right;
  padding-top: 20px;
  font-size: 14px;
`;
export default function() {
  return (
    <div className="experiencesContainer">
      <ExpTitle>
        <Title>Experiences</Title>
        <SeeAll>See all ></SeeAll>
      </ExpTitle>
      <Row className="rowExperiences">
        <Col1 className="card">
          <img src={experience1} alt="" />
          <p>$29 Forest therapy</p>
        </Col1>
        <Col1 className="card">
          <img src={experience2} alt="" />
          <p>$69 Whale watching</p>
        </Col1>
        <Col1 className="card">
          <img src={experience3} alt="" />
          <p>$69 Table Mountain Summit, Cable Car Down</p>
        </Col1>
        <Col1 className="card">
          <img src={experience4} alt="" />
          <p>$50 Salsa night</p>
        </Col1>
      </Row>
    </div>
  );
}
