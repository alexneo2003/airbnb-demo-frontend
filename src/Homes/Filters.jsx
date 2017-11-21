import React from "react";
import styled from "styled-components";
import { Row, Col } from "../styled";

const FiltersBorder = styled.div`
  position: fixed;
  top: 79px;
  left: 0;
  z-index: 15;
  display: flex;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  height: 58px;
  margin-bottom: 24px;
  align-items: center;
`;

const FiltersRow = styled(Row)`
  margin: 0 auto;
  width: 100%;
  @media (min-width: 992px) {
    max-width: 992px;
  }
`;

const FilterButton = styled.button`
  cursor: pointer;
  background-color: white;
  color: #383838;
  font-size: 14px;
  padding: 8px 16px;
  margin-top: 2px;
  margin-left: 8px;
  margin-right: 8px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  display: ${props => (props.none ? "none" : "inline-block")};

  @media (min-width: 992px) {
    display: inline-block;
  }
`;

export default function Filters(props) {
  return (
    <FiltersBorder>
      <FiltersRow>
        <Col xs="12" md="12" lg="8">
          <FilterButton>Dates</FilterButton>
          <FilterButton>Guests</FilterButton>
          <FilterButton none>Room type</FilterButton>
          <FilterButton none>Price</FilterButton>
          <FilterButton none>Instant book</FilterButton>
          <FilterButton>More filters</FilterButton>
        </Col>
      </FiltersRow>
    </FiltersBorder>
  );
}
