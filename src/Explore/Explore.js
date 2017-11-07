import React from "react";
import styled from "styled-components";
import explore1 from "./explore1.png";
import explore2 from "./explore2.png";
import explore3 from "./explore3.png";

const Container = styled.div`heignt: 130px;`;

const Row = styled.div`display: flex;`;
const Col1 = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  flex-basis: 33.3333%;
  box-sizing: border-box;
`;

const Card = styled.div`
  display: flex;
  border: 1px solid rgba(72, 72, 72, 0.2);
  align-items: center;
  border-radius: 4px;
`;
const Title = styled.h2`
  color: rgba(56, 56, 56, 1);
  margin-top: 50px;
  font-family: CircularBold;
`;
const Text = styled.p`
  font-weight: bold;
  margin-left: 25px;
  color: rgba(56, 56, 56, 1);
`;

export default function() {
  return (
    <Container className="exploreContainer">
      <Title>Explore Airbnb</Title>
      <Row className="rowExplore">
        <Col1 className="col1">
          <Card>
            <img src={explore1} />
            <Text>Homes</Text>
          </Card>
        </Col1>
        <Col1 className="col2">
          <Card>
            <img src={explore2} />
            <Text>Experience</Text>
          </Card>
        </Col1>
        <Col1 className="col3">
          <Card>
            <img src={explore3} />
            <Text>Restaurants</Text>
          </Card>
        </Col1>
      </Row>
    </Container>
  );
}
