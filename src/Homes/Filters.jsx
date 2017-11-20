import React from "react";
import styled from "styled-components";
import { Row } from "../styled";

const FilterButton = styled.button`
  background-color: white;
  font-size: 14px;
  padding: 8px 16px;
  margin-left: 8px;
  margin-right: 8px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  &:first-child {
    margin-left: 0px;
  }
  &:last-child {
    margin-left: 0px;
  }
`;

const FiltersRow = styled(Row)`
  height: 56px;
  align-items: center;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

export default function Filters() {
  return (
    <Row>
      <FilterButton>Dates</FilterButton>
      <FilterButton>Guests</FilterButton>
      <FilterButton>Room type</FilterButton>
      <FilterButton>Price</FilterButton>
      <FilterButton>Instant book</FilterButton>
      <FilterButton>More filters</FilterButton>
    </Row>
  );
}
