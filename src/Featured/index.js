import React from "react";
import styled from "styled-components";
import featured1 from "./featured1.png";
import featured2 from "./featured2.png";
import featured3 from "./featured3.png";
import featured4 from "./featured4.png";
import featured5 from "./featured5.png";
import featured6 from "./featured6.png";
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
const NextPage = styled.img`
  margin-left: -30px;
  margin-top: -60px;
`;
export default function() {
  return (
    <div>
      <Title>Featured destination</Title>
      <Row>
        <Col1>
          <img src={featured1} alt="" />
          <p>Paris</p>
        </Col1>
        <Col1>
          <img src={featured2} alt="" />
          <p>Miami</p>
        </Col1>
        <Col1>
          <img src={featured3} alt="" />
          <p>Tokio</p>
        </Col1>
        <Col1>
          <img src={featured4} alt="" />
          <p>Cape town</p>
        </Col1>
        <Col1>
          <img src={featured5} alt="" />
          <p>Seoul</p>
        </Col1>
        <Col1>
          <img src={featured6} alt="" />
          <p>Los Angeles</p>
        </Col1>
        <NextPage src={nextPage} alt="" />
      </Row>
    </div>
  );
}
