import React from "react";
import styled from "styled-components";

const Row = styled.div`display: flex;`;
const Col1 = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  flex-basis: 25%;
  box-sizing: border-box;
`;
const Select = styled.select.attrs({})`width=229px;
height=48px;
`;

const Title = styled.h2`color: rgba(56, 56, 56, 1);`;
const SeeAll = styled.p`
  align: right;
  padding-top: 20px;
  font-size: 14px;
`;
export default function() {
  return (
    <div className="footerContainer">
      <Row className="rowFooter">
        <Col1 className="card">
          <Select>
            <option>English</option>
            <option>Russian</option>
          </Select>
          <Select>
            <option>Unated States Dollar</option>
            <option>Russian Ruble</option>
            <option>Ukrainian Hrivna</option>
          </Select>
        </Col1>
        <Col1 className="card">
          <p>$82 Your private 3 bedr. riad and exclusive</p>
        </Col1>
        <Col1 className="card">
          <p>$200 Dreamy Tropical Tree House</p>
        </Col1>
        <Col1 className="card">
          <p>$200 Dreamy Tropical Tree House</p>
        </Col1>
        <Col1 className="card">
          <p>$200 Dreamy Tropical Tree House</p>
        </Col1>
      </Row>
    </div>
  );
}
